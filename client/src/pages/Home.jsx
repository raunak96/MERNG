import { useQuery } from "@apollo/client";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { GET_CURRENT_USER, GET_POSTS } from "../graphQl/Queries";

const Home = () => {
	const { loading, data } = useQuery(GET_POSTS);
	const { data: userData } = useQuery(GET_CURRENT_USER);
	const posts = data?.getPosts ?? [];

	return (
		<div className="flex flex-col w-9/12 mx-auto my-5">
			<h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
			<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
				{loading ? (
					<h1>Loading...</h1>
				) : (
					<>
						{userData?.currentUser && <PostForm />}
						{posts.map(post => (
							<PostCard key={post.id} post={post} />
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
