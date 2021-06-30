import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Query {
		hello: String!
		getPosts: [Post!]!
		getPost(postId: ID!): Post
	}
	type Post {
		id: ID!
		body: String!
		createdAt: String!
		username: String!
		comments: [Comment]!
		likes: [Like]!
		likesCount: Int!
		commentsCount: Int!
	}
	type Comment {
		id: ID!
		body: String!
		username: String!
		createdAt: String!
	}
	type Like {
		id: ID!
		username: String!
		createdAt: String!
	}
	type Mutation {
		register(registerInput: RegisterInput!): User!
		login(username: String!, password: String!): User!
		createPost(body: String!): Post!
		deletePost(postId: ID!): Boolean!
		addComment(postId: ID!, body: String!): Post!
		deleteComment(postId: ID!, commentId: ID!): Post!
		likePost(postId: ID!): Post!
	}
	input RegisterInput {
		username: String!
		password: String!
		email: String!
	}
	type User {
		id: ID!
		username: String!
		email: String!
		token: String!
		createdAt: String!
	}

	type Subscription {
		newPost: Post!
	}
`;

export default typeDefs;
