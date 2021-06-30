import { InMemoryCache, makeVar } from "@apollo/client";
import jwtDecode from "jwt-decode";

export const getLocalUserData = () => {
	const token = localStorage.getItem("token");
	if (!token) return null;
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		localStorage.removeItem("token");
		return null;
	}
	return decodedToken;
};
export const currentUserVar = makeVar(getLocalUserData());

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				currentUser: {
					read: () => currentUserVar(),
				},
			},
		},
		Post: {
			fields: {
				likes: {
					merge: (exisiting = [], incoming) => incoming,
				},
				comments: {
					merge: (exisiting = [], incoming) => incoming,
				},
			},
		},
	},
});

export default cache;
