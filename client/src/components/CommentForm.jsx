import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { currentUserVar, getLocalUserData } from "../graphQl/cache";
import { ADD_COMMENT } from "../graphQl/Mutations";

const CommentForm = ({ postId }) => {
	const inputRef = useRef(null);
	const [addComment, { loading }] = useMutation(ADD_COMMENT, {
		onCompleted: () => {
			inputRef.current.value = "";
			inputRef.current.blur();
		},
		onError: () => {
			currentUserVar(getLocalUserData());
		},
	});
	const handleSubmit = e => {
		e.preventDefault();
		if (inputRef.current.value.trim() === "") return;
		addComment({ variables: { postId, body: inputRef.current.value } });
	};
	return (
		<form
			className="flex justify-between items-center text-gray-500 w-full rounded-full py-4 px-5 bg-gray-100 border border-gray-400 border-opacity-0 focus-within:border-opacity-100"
			onSubmit={handleSubmit}
			style={{}}>
			<input
				type="text"
				ref={inputRef}
				className="outline-none border-none w-10/12 bg-transparent"
				placeholder="Write a Comment..."
			/>
			<button
				type="submit"
				disabled={loading}
				className="disabled:cursor-not-allowed">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 transform rotate-90 "
					viewBox="0 0 20 20"
					fill="currentColor">
					<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
				</svg>
			</button>
		</form>
	);
};

export default CommentForm;
