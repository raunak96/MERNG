import { AuthenticationError, UserInputError } from "apollo-server-express";
import IsEmail from "isemail";
import jwt from "jsonwebtoken";
import { loginValidator } from "../../utils/validators.js";
import bcrypt from "bcryptjs";
import isAuthenticated from "../../utils/isAuthenticated.js";

export const generateToken = user =>
	jwt.sign(
		{
			id: user.id,
			email: user.email,
			username: user.username,
		},
		process.env.JWT_SECRET,
		{ expiresIn: "1h" }
	);

const Mutation = {
	register: async (
		_,
		{ registerInput: { username, email, password } },
		{ User }
	) => {
		try {
			const newUser = new User({
				username,
				email,
				password,
				createdAt: new Date().toISOString(),
			});
			if (!IsEmail.validate(email))
				throw new UserInputError("Email not in proper format", {
					argumentName: "email",
					errors: { email: "This email is not valid" },
				});
			const user = await User.findOne({ username });
			if (user)
				throw new UserInputError("Username is taken", {
					argumentName: "username",
					errors: { username: "This username is already taken" },
				});
			const createdUser = await newUser.save();
			const token = generateToken(createdUser);
			return {
				...createdUser._doc,
				id: createdUser._id,
				token,
			};
		} catch (error) {
			throw error;
		}
	},
	login: async (_, { username, password }, { User }) => {
		const { errors, valid } = loginValidator(username, password);
		if (!valid) throw new UserInputError("Validation Errors", { errors });
		const user = await User.findOne({ username });
		if (!user)
			throw new UserInputError("User not registered", {
				errors: { general: "User not registered!" },
			});
		const isCorrectPassword = await bcrypt.compare(password, user.password);
		if (!isCorrectPassword) {
			throw new UserInputError("Wrong Credentials", {
				errors: { general: "Wrong Credentials" },
			});
		}
		const token = generateToken(user);
		return {
			...user._doc,
			id: user._id,
			token,
		};
	},

	createPost: async (_, { body }, { headers, Post, pubsub }) => {
		const user = isAuthenticated(headers);
		if (body.trim() === "") throw new Error("Post body cannot be empty");
		const newPost = new Post({
			body,
			username: user.username,
			user: user.id,
			createdAt: new Date().toISOString(),
		});

		const post = await newPost.save();
		pubsub.publish("NEW_POST", { newPost: post });
		return post;
	},
	deletePost: async (_, { postId }, { headers, Post }) => {
		const user = isAuthenticated(headers);
		try {
			const post = await Post.findById(postId);
			if (user.username !== post?.username)
				throw new AuthenticationError(
					"You do not have permission to do this action"
				);
			await post.delete();
			return true;
		} catch (error) {
			throw error;
		}
	},

	addComment: async (_, { body, postId }, { headers, Post }) => {
		const { username } = isAuthenticated(headers);
		if (body.trim() === "")
			throw new UserInputError("Empty Comment", {
				errors: { body: "Comment body cannot be empty" },
			});
		const post = await Post.findById(postId);
		if (post) {
			const comment = {
				body,
				username,
				createdAt: new Date().toISOString(),
			};
			post.comments = [comment, ...post.comments];
			await post.save();
			return post;
		}
		throw new UserInputError("Post does not exist");
	},
	deleteComment: async (_, { postId, commentId }, { headers, Post }) => {
		const { username } = isAuthenticated(headers);
		const post = await Post.findById(postId);
		if (post) {
			const commentToDelete = post.comments.findIndex(
				comment => comment.id === commentId
			);
			if (commentToDelete === -1)
				throw new UserInputError("Comment not found");
			if (post.comments[commentToDelete].username !== username)
				throw new AuthenticationError("Action not allowed");

			post.comments.splice(commentToDelete, 1);
			await post.save();
			return post;
		}
		throw new UserInputError("Post does not exist");
	},

	likePost: async (_, { postId }, { headers, Post }) => {
		const { username } = isAuthenticated(headers);
		const post = await Post.findById(postId);
		if (post) {
			if (post.likes.find(like => like.username === username)) {
				// already liked, unlike the post
				post.likes = post.likes.filter(
					like => like.username !== username
				);
			} else {
				const like = { username, createdAt: new Date().toISOString() };
				post.likes = [like, ...post.likes];
			}
			await post.save();
			return post;
		}
		throw new UserInputError("Post does not exist");
	},
};

export default Mutation;
