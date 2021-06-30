import { Route, Switch } from "react-router-dom";
import AlreadyAuthenticated from "./AlreadyAuthenticated";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/posts/:postId">
					<Post />
				</Route>
				<AlreadyAuthenticated exact path="/login">
					<Login />
				</AlreadyAuthenticated>
				<AlreadyAuthenticated exact path="/register">
					<Login />
				</AlreadyAuthenticated>
			</Switch>
		</>
	);
};

export default App;
