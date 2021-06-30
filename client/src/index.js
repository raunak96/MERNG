import ReactDOM from "react-dom";
import ApolloWrapper from "./ApolloWrapper";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<ApolloWrapper>
		<Router>
			<App />
		</Router>
	</ApolloWrapper>,
	document.getElementById("root")
);
