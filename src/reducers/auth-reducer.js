/**
 *
 * @param {Object} loginState Defines the current state of login
 * @param {Object} loginAction Defines the state to be updated
 * @returns {Object} Updated loginState
 */
const loginReducer = (loginState, loginAction) => {
	return { ...loginState, ...loginAction };
};

/**
 *
 * @param {Object} registerState Defines the current state of register
 * @param {Object} registerAction Defines the state to be updated
 * @returns {Object} Updated registerState
 */
const registerReducer = (registerState, registerAction) => {
	return { ...registerState, ...registerAction };
};

const authReducer = (authState, authAction) => {
	switch (authAction.type) {
		case "UPDATE_TOKEN":
			return { ...authState, token: authAction.token };
		case "UPDATE_EMAIL":
			return { ...authState, email: authAction.email };
		case "UPDATE_FIRSTNAME":
			return { ...authState, firstName: authAction.firstName };
		case "UPDATE_LASTNAME":
			return { ...authState, lastName: authAction.lastName };
		case "UPDATE_USER":
			return { ...authState, ...authAction };
		default:
			return authState;
	}
};
export { loginReducer, registerReducer, authReducer };
