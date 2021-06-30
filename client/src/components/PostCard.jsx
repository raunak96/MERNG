import { Link } from "react-router-dom";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphQl/Queries";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import Tooltip from "./Tooltip";

const PostCard = ({ post }) => {
	const { body, createdAt, id, username, likesCount, commentsCount, likes } =
		post;
	const { data } = useQuery(GET_CURRENT_USER);

	return (
		<>
			<div className="shadow-xl flex flex-col justify-between px-4 py-2 border border-gray-200 rounded">
				<div className="flex flex-col">
					<div className="flex justify-between">
						<h1>{username}</h1>
						<img
							src="https://react.semantic-ui.com/images/avatar/large/elyse.png"
							alt="avatar"
							className="rounded-full h-10 w-10"
						/>
					</div>
					<span className="text-gray-500 text-xs">
						{moment(createdAt).fromNow()}
					</span>
					<p className="text-base text-gray-700 mt-1 max-h-40 h-20">
						{body}
					</p>
				</div>
				<div className="border-t border-gray-200 pt-2 flex justify-between">
					<LikeButton
						likesCount={likesCount}
						postId={id}
						user={data?.currentUser}
						likes={likes}
					/>
					<Tooltip tooltipText="View comments">
						<Link
							className="flex items-center rounded"
							to={`/posts/${id}`}>
							<span className="px-4 py-2 text-white bg-blue-500 h-full rounded-l border-l border-t border-b border-blue-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="white">
									<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
									<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
								</svg>
							</span>
							<span className="bg-white px-4 py-2 text-blue-500 h-full w-full rounded-r border border-blue-400">
								{commentsCount}
							</span>
						</Link>
					</Tooltip>
					{data?.currentUser?.username === username && (
						<DeleteButton postId={id} />
					)}
				</div>
			</div>
		</>
	);
};

export default PostCard;
