import axios from "axios";

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const loginHandler = (e, location, navigate, loginState, authDispatch) => {
	e.preventDefault();
	const loginInfo = { email: loginState.email, password: loginState.password };
	(async () => {
		try {
			const response = await axios.post(`/api/auth/login`, loginInfo);
			// saving the user data in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.foundUser.firstName,
				lastName: response.data.foundUser.lastName,
				email: response.data.foundUser.email,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
			navigate(location?.state?.from?.pathname);
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const registerHandler = (
	e,
	location,
	navigate,
	registerState,
	authDispatch
) => {
	e.preventDefault();
	const registerInfo = {
		firstName: registerState.firstName,
		lastName: registerState.lastName,
		email: registerState.email,
		password: registerState.password,
	};
	(async () => {
		try {
			const response = await axios.post(`/api/auth/signup`, registerInfo);
			// saving the encodedToken in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.createdUser.firstName,
				lastName: response.data.createdUser.lastName,
				email: response.data.createdUser.email,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
			navigate(location?.state?.from?.pathname);
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Set values in the input form
 * @param {Element} e Element
 * @param {string} field Field we need to update the value for
 * @param {string} type Type of the field
 * @param {function} loginDispatch Dispatch function
 */
const setValueHandler = (e, field, type, loginDispatch) => {
	const fieldValue = { type: type, payload: {} };
	fieldValue.payload[field] = e.target.value;
	loginDispatch(fieldValue);
};

/**
 * Set test credentials into the input form
 * @param {function} loginDispatch Dispatch Function
 * @returns
 */
const setTestHandler = (loginDispatch) =>
	loginDispatch({
		type: "TEST_CREDENTIAL",
		payload: { email: "test@gmail.com", password: "test123" },
	});

/**
 *
 * @param {string} field Field we need to update value for
 * @param {boolean} value Value to be updated
 * @param {string} type Type of value
 * @param {function} loginDispatch Dispatch Function
 * @param {Object} focusReset Set all other field to false
 */
const setFocusHandler = (field, value, type, loginDispatch, focusReset) => {
	focusReset[field] = value;
	loginDispatch({ payload: { focus: focusReset }, type: type });
};

export {
	loginHandler,
	registerHandler,
	setValueHandler,
	setTestHandler,
	setFocusHandler,
};
