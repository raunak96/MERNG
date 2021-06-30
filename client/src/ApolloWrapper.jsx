import { ApolloProvider, ApolloClient, createHttpLink } from "@apollo/client";
import cache from "./graphQl/cache";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({ link: authLink.concat(httpLink), cache });
const ApolloWrapper = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
