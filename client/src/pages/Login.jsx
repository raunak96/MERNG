import { useMutation } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { currentUserVar } from "../graphQl/cache";
import { LOGIN_USER, REGISTER_USER } from "../graphQl/Mutations";

const Login = () => {
	const { pathname } = useLocation();
	const { heading, buttonText, isLoggingIn } = useMemo(
		() => ({
			heading: pathname.includes("login") ? "Login" : "Register",
			buttonText: pathname.includes("login") ? "Sign In" : "Sign Up",
			isLoggingIn: pathname.includes("login"),
		}),
		[pathname]
	);
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { username, email, password, confirmPassword } = formData;

	const [mutation, { loading }] = useMutation(
		isLoggingIn ? LOGIN_USER : REGISTER_USER,
		{
			variables: isLoggingIn
				? { username, password }
				: { email, password, username },
			onCompleted: data => {
				const user = isLoggingIn ? data?.login : data?.register;
				localStorage.setItem("token", user.token);
				currentUserVar(user);
			},
			onError: error => {
				setErrors(
					error.graphQLErrors?.[0]?.extensions?.exception?.errors ??
						error
				);
			},
		}
	);
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (!isLoggingIn && confirmPassword !== password) {
			setErrors(prev => ({
				password: "Passwords do not match",
				...prev,
			}));
			return;
		}
		mutation();
	};

	useEffect(() => {
		setFormData({
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		setErrors({});
	}, [pathname]);
	return (
		<div className="w-2/5 mx-auto flex flex-col items-center mt-14">
			<h1 className="text-2xl mb-3">{heading}</h1>
			<form onSubmit={handleSubmit} className="w-full">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						className="input"
						type="text"
						name="username"
						id="username"
						onChange={handleChange}
						value={username}
					/>
				</div>

				{!isLoggingIn && (
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							className="input"
							type="email"
							name="email"
							id="email"
							onChange={handleChange}
							value={email}
						/>
					</div>
				)}
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						className="input"
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						value={password}
					/>
				</div>
				{!isLoggingIn && (
					<div className="form-group">
						<label htmlFor="confirmPassword">
							Confirm Password
						</label>
						<input
							className="input"
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							onChange={handleChange}
							value={confirmPassword}
						/>
					</div>
				)}
				<button
					disabled={!!loading}
					type="submit"
					className="px-4 py-2 bg-blue-600 opacity-90 text-white rounded hover:opacity-100 disabled:opacity-40 disabled:cursor-not-allowed">
					{!!loading ? "Submitting" : buttonText}
				</button>
			</form>
			{Object.keys(errors).length > 0 && (
				<div className="bg-red-200 text-red-600 rounded py-2 px-2 w-full mt-5 flex">
					<ul className="list-disc ml-5">
						{Object.values(errors).map(error => (
							<li key={error}>{error}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Login;
