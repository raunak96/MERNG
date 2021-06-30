import { useQuery } from "@apollo/client";
import moment from "moment";
import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";
import DeleteButton from "../components/DeleteButton";
import LikeButton from "../components/LikeButton";
import { currentUserVar } from "../graphQl/cache";
import { GET_POST } from "../graphQl/Queries";

const Post = () => {
	const { postId } = useParams();
	const user = currentUserVar();
	const { data, loading } = useQuery(GET_POST, {
		variables: { postId },
		skip: !postId,
	});
	const {
		body,
		createdAt,
		username,
		comments,
		likes,
		likesCount,
		commentsCount,
	} = data?.getPost ?? {};

	if (loading) return <p>Loading Post....</p>;
	return (
		<>
			<div className="w-3/5 grid grid-cols-12 mx-auto mt-12 gap-6">
				<img
					src="https://react.semantic-ui.com/images/avatar/large/elyse.png"
					alt="avatar"
					className="rounded col-span-2 h-30 w-30"
				/>
				<div className="col-span-10 shadow-xl py-5 px-3 border border-gray-200 flex flex-col justify-between rounded space-y-5">
					<div>
						<h1>{username}</h1>
						<span className="text-gray-500 text-xs">
							{moment(createdAt).fromNow()}
						</span>
						<p className="text-base text-gray-700 mt-2 h-20">
							{body}
						</p>
					</div>
					<div className="border-t border-gray-200 pt-2 flex flex-wrap justify-between gap-y-2">
						<LikeButton
							likesCount={likesCount}
							postId={postId}
							user={user}
							likes={likes}
						/>
						<div className="flex items-center rounded">
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
						</div>
						{user?.username === username && (
							<DeleteButton postId={postId} />
						)}
					</div>
				</div>
				<div className="col-start-3 col-span-10 pb-20">
					<h1 className="text-lg text-blue-500">Comments</h1>
					{comments?.map(comment => (
						<CommentCard
							key={comment.id}
							comment={comment}
							postId={postId}
							user={user}
						/>
					))}
				</div>
			</div>
			{user && (
				<div className="fixed bottom-5 right-0 left-0 w-3/5 mx-auto grid grid-cols-12 z-10 bg-white">
					<div className="md:col-start-3 md:col-span-12 col-span-12">
						<CommentForm postId={postId} />
					</div>
				</div>
			)}
		</>
	);
};

export default Post;
