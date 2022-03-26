import { useReducer, createContext, useContext } from "react";
import { authReducer } from "../reducers";

const defaultAuthState = {
	token: "",
	email: "",
	firstName: "",
	lastName: "",
};

const AuthContext = createContext({ defaultAuthState });

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
