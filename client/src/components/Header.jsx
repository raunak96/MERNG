import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { currentUserVar } from "../graphQl/cache";
import { GET_CURRENT_USER } from "../graphQl/Queries";

const Header = () => {
	const { data } = useQuery(GET_CURRENT_USER);
	const history = useHistory();
	const activeStyle = useMemo(
		() => ({ opacity: 1, textDecoration: "underline", fontWeight: "bold" }),
		[]
	);
	const logout = () => {
		localStorage.removeItem("token");
		currentUserVar(null);
		history.push("/");
	};
	return (
		<div className="sticky top-0 py-4 px-4 bg-green-500 text-white flex justify-between items-center z-50">
			<div>
				<NavLink
					exact
					to="/"
					className="opacity-80 hover:opacity-100 hover:underline hover:font-bold"
					activeStyle={activeStyle}>
					Home
				</NavLink>
			</div>
			{data.currentUser ? (
				<div className="flex space-x-2">
					<div className="mr-3 opacity-80 hover:opacity-100 hover:font-bold">
						Welcome {data.currentUser.username} !
					</div>
					<button
						onClick={logout}
						className="mr-3 opacity-80 hover:opacity-100 hover:underline hover:font-bold">
						Logout
					</button>
				</div>
			) : (
				<div>
					<NavLink
						exact
						to="/login"
						className="mr-3 opacity-80 hover:opacity-100 hover:underline hover:font-bold"
						activeStyle={activeStyle}>
						Login
					</NavLink>
					<NavLink
						exact
						to="/register"
						className="mr-2 opacity-80 hover:opacity-100 hover:underline hover:font-bold"
						activeStyle={activeStyle}>
						Register
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default Header;
