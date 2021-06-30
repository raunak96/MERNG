import { useQuery } from "@apollo/client";
import { Redirect, Route } from "react-router-dom";
import { GET_CURRENT_USER } from "./graphQl/Queries";

const AlreadyAuthenticated = ({ children, ...rest }) => {
	const { data } = useQuery(GET_CURRENT_USER);

	return (
		<Route
			{...rest}
			render={props =>
				data.currentUser ? <Redirect to="/" /> : children
			}
		/>
	);
};

export default AlreadyAuthenticated;
