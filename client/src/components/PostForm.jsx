import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import { currentUserVar, getLocalUserData } from "../graphQl/cache";
import { CREATE_POST } from "../graphQl/Mutations";

const PostForm = () => {
	const inputRef = useRef(null);

	const [createPost, { loading, error }] = useMutation(CREATE_POST, {
		onError: () => {
			currentUserVar(getLocalUserData());
		},
		update: (cache, { data: { createPost } }) => {
			cache.modify({
				fields: {
					getPosts: existingPosts => {
						const newPost = cache.writeFragment({
							data: createPost,
							fragment: gql`
								fragment NewPost on Post {
									id
								}
							`,
						});
						return [newPost, ...existingPosts];
					},
				},
			});
		},
	});

	const handleSubmit = e => {
		e.preventDefault();
		createPost({ variables: { body: inputRef.current.value } });
		inputRef.current.value = "";
	};

	return (
		<div className="flex flex-col">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="body" className="text-2xl mb-2 font-bold">
						Create a Post :
					</label>
					<input
						className="input focus:border focus:border-gray-400"
						type="text"
						id="body"
						ref={inputRef}
					/>
				</div>
				<button
					disabled={loading}
					type="submit"
					className="px-4 py-2 bg-green-500 opacity-90 text-white rounded hover:opacity-100 disabled:opacity-40 disabled:cursor-not-allowed">
					Submit
				</button>
			</form>
			{error && (
				<ul className="bg-red-200 text-red-500 mt-4 px-2 rounded py-3">
					<li className=" list-disc ml-5">
						{error?.graphQLErrors?.[0]?.message ??
							"Some error took place"}
					</li>
				</ul>
			)}
		</div>
	);
};

export default PostForm;
