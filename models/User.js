import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		unique: true,
	},
	password: { type: String, required: [true, "Password is required"] },
	email: { type: String, required: [true, "Email is required"] },
	createdAt: String,
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
