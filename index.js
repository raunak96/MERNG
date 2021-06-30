import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import typeDefs from "./graphQl/typeDefs.js";
import resolvers from "./graphQl/resolvers/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { createServer } from "http";
import { ApolloServer, PubSub } from "apollo-server-express";
import path from "path";
import { fileURLToPath } from "url";

const startServer = async () => {
	dotenv.config();
	const app = express();
	const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

	app.use(express.static(path.join(__dirname, "client/build")));

	const server = createServer(app);
	apolloServer.applyMiddleware({ app });
	apolloServer.installSubscriptionHandlers(server);

	const PORT = process.env.PORT || 5000;

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});

	server.listen(PORT, () => {
		console.log(
			`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
		);
		console.log(
			`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`
		);
	});
};

startServer();
