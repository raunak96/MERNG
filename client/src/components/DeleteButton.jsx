import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { currentUserVar, getLocalUserData } from "../graphQl/cache";
import { DELETE_COMMENT, DELETE_POST } from "../graphQl/Mutations";
import Modal from "./Modal";
import Tooltip from "./Tooltip";

const DeleteButton = ({ postId, commentId }) => {
	const { pathname } = useLocation();
	const history = useHistory();
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => setIsOpen(false);
	const [deletePost, { loading }] = useMutation(
		commentId ? DELETE_COMMENT : DELETE_POST,
		{
			variables: { postId, commentId },
			onError: () => {
				currentUserVar(getLocalUserData());
			},
			onCompleted: () =>
				!commentId && pathname !== "/" && history.push("/"),
			update: (cache, { data }) => {
				if (data.deletePost) {
					cache.modify({
						fields: {
							getPosts: (exisitingPosts, { readField }) =>
								exisitingPosts.filter(
									post => readField("id", post) !== postId
								),
						},
					});
				}
			},
		}
	);
	const handleDelete = () => {
		closeModal();
		deletePost();
	};

	return (
		<Tooltip tooltipText={`Delete ${commentId ? "comment" : "post"}`}>
			<button
				className="flex items-center rounded disabled:opacity-40 disabled:cursor-not-allowed"
				onClick={() => setIsOpen(true)}
				disabled={loading}>
				<span className="px-4 py-2 text-white bg-red-500 h-full rounded border border-red-400 hover:bg-red-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</span>
			</button>
			<Modal
				isOpen={isOpen}
				callback={handleDelete}
				closeModal={closeModal}
				modalAction={commentId ? "Delete Comment" : "Delete Post"}
				modalBody={`Are you sure you want to delete this ${
					commentId ? "comment" : "post"
				} ?`}
				modalTitle={`Delete ${commentId ? "Comment" : "Post"}`}
			/>
		</Tooltip>
	);
};

export default DeleteButton;
