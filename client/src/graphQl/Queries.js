import { gql } from "@apollo/client";

export const GET_POSTS = gql`
	query getPosts {
		getPosts {
			id
			body
			createdAt
			username
			comments {
				id
				body
				username
				createdAt
			}
			commentsCount
			likes {
				username
			}
			likesCount
		}
	}
`;

export const GET_POST = gql`
	query getPost($postId: ID!) {
		getPost(postId: $postId) {
			id
			body
			createdAt
			username
			likesCount
			likes {
				username
			}
			commentsCount
			comments {
				id
				username
				createdAt
				body
			}
		}
	}
`;

export const GET_CURRENT_USER = gql`
	query getCurrentUser {
		currentUser @client
	}
`;
