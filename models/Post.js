import mongoose from "mongoose";

var PostSchema = mongoose.Schema({
	body: String,
	username: String,
	createdAt: String,
	comments: [
		{
			body: String,
			username: String,
			createdAt: String,
		},
	],
	likes: [
		{
			username: String,
			createdAt: String,
		},
	],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
