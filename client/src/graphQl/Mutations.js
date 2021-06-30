import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
	mutation register($username: String!, $email: String!, $password: String!) {
		register(
			registerInput: {
				username: $username
				email: $email
				password: $password
			}
		) {
			id
			username
			email
			createdAt
			token
		}
	}
`;

export const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			id
			username
			email
			createdAt
			token
		}
	}
`;

export const CREATE_POST = gql`
	mutation createPost($body: String!) {
		createPost(body: $body) {
			id
			body
			createdAt
			username
			likes {
				id
				username
				createdAt
			}
			likesCount
			comments {
				id
				body
				username
				createdAt
			}
			commentsCount
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId)
	}
`;

export const LIKE_POST = gql`
	mutation likePost($postId: ID!) {
		likePost(postId: $postId) {
			id
			likes {
				id
				username
			}
			likesCount
		}
	}
`;

export const DELETE_COMMENT = gql`
	mutation deleteComment($postId: ID!, $commentId: ID!) {
		deleteComment(postId: $postId, commentId: $commentId) {
			id
			comments {
				id
				username
				createdAt
				body
			}
			commentsCount
		}
	}
`;

export const ADD_COMMENT = gql`
	mutation addComment($postId: ID!, $body: String!) {
		addComment(postId: $postId, body: $body) {
			id
			comments {
				id
				body
				createdAt
				username
			}
			commentsCount
		}
	}
`;
