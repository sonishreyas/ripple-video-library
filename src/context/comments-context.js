import { createContext, useContext, useReducer } from "react";
import { commentsReducer } from "../reducers";
const defaultcommentsState = {
	newComment: "",
	comments: [],
};

const CommentsContext = createContext(defaultcommentsState);

const CommentsProvider = ({ children }) => {
	const [commentsState, commentsDispatch] = useReducer(
		commentsReducer,
		defaultCommentsState
	);

	return (
		<CommentsContext.Provider
			value={{
				commentsState,
				commentsDispatch,
			}}
		>
			{children}
		</CommentsContext.Provider>
	);
};

const useComments = () => useContext(CommentsContext);

export { useComments, CommentsProvider };
