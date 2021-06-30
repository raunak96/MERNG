import { useMutation } from "@apollo/client";
import { useMemo } from "react";
import { currentUserVar, getLocalUserData } from "../graphQl/cache";
import { LIKE_POST } from "../graphQl/Mutations";
import Tooltip from "./Tooltip";

const LikeButton = ({ likesCount, postId, user, likes }) => {
	const [likePost] = useMutation(LIKE_POST, {
		variables: { postId },
		onError: () => {
			currentUserVar(getLocalUserData());
		},
	});

	const isLiked = useMemo(
		() => !!likes.find(like => like && like.username === user?.username),
		[likes, user?.username]
	);

	return (
		user && (
			<Tooltip tooltipText={`${isLiked ? "Unlike" : "Like"} Post`}>
				<button
					className="flex items-center rounded"
					onClick={likePost}>
					<span
						className={`inline-block px-4 py-2 h-full rounded-l border-l border-t border-b border-green-400 ${
							isLiked ? "bg-green-500" : "bg-white"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill={isLiked ? "white" : "rgba(0,0,0,0.2)"}>
							<path
								fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
					<span className="inline-block bg-white px-4 py-2 text-green-500 h-full w-full rounded-r border border-green-400">
						{likesCount}
					</span>
				</button>
			</Tooltip>
		)
	);
};

export default LikeButton;
