import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";

const isAuthenticated = headers => {
	const authHeader = headers.authorization;
	if (!authHeader) throw new Error("Authorization Header must be provided");
	const token = authHeader.split("Bearer ")[1];
	if (!token)
		throw new Error(
			"Authorization Header must be of the form: 'Bearer <token>'"
		);
	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		return user;
	} catch (error) {
		throw new AuthenticationError("Auth Token expired/invalid");
	}
};

export default isAuthenticated;
