const Query = {
	hello: () => "Hello World",
	getPosts: async (_, __, { Post }) => {
		try {
			const posts = await Post.find({}).sort({ createdAt: -1 });
			return posts;
		} catch (error) {
			throw new Error(error);
		}
	},
	getPost: async (_, { postId }, { Post }) => {
		try {
			const post = await Post.findById(postId);
			if (!post) throw new Error("No such post found!");
			return post;
		} catch (error) {
			throw error;
		}
	},
};

export default Query;
