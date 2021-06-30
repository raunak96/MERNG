import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import typeDefs from "./graphQl/typeDefs.js";
import resolvers from "./graphQl/resolvers/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { createServer } from "http";
import { ApolloServer, PubSub } from "apollo-server-express";

const startServer = async () => {
	dotenv.config();
	const app = express();

	const pubsub = new PubSub();

	const MONGO_URI =
		process.env.NODE_ENV !== "production"
			? "mongodb://127.0.0.1/merng"
			: process.env.MONGO_URI;

	const conn = await mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		bufferCommands: false,
		bufferMaxEntries: 0,
		useFindAndModify: false,
		useCreateIndex: true,
	});
	console.log("MongoDB Server at :", conn.connection.host);

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: ({ req }) => ({
			...req,
			User,
			Post,
			pubsub,
		}),
		subscriptions: {
			onConnect: async (connectionParams, webSocket) => {
				console.log(connectionParams);
			},
		},
	});

	const server = createServer(app);
	apolloServer.applyMiddleware({ app });
	apolloServer.installSubscriptionHandlers(server);

	server.listen(5000, () => {
		console.log(
			`🚀 Server ready at http://localhost:${5000}${
				apolloServer.graphqlPath
			}`
		);
		console.log(
			`🚀 Subscriptions ready at ws://localhost:${5000}${
				apolloServer.subscriptionsPath
			}`
		);
	});
};

startServer();
