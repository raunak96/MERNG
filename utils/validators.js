const loginValidator = (username, password) => {
	const errors = {};
	if (username.trim() === "") {
		errors.username = "Username is required";
	}
	if (password.trim() === "") {
		errors.password = "Password is required";
	}

	return { errors, valid: Object.keys(errors).length === 0 };
};

export { loginValidator };
