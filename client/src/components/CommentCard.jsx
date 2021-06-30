import moment from "moment";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, postId, user }) => {
	const { username, createdAt, body, id } = comment;

	return (
		<div className="shadow-md border border-blue-300 p-3 my-5 rounded flex justify-between">
			<div>
				<h1 className="text-lg text-gray-500">{username}</h1>
				<p className="text-xs text-gray-400">
					{moment(createdAt).fromNow()}
				</p>
				<p className="text-base pt-3">{body}</p>
			</div>
			<div>
				{user?.username === username && (
					<DeleteButton postId={postId} commentId={id} />
				)}
			</div>
		</div>
	);
};

export default CommentCard;
