import { createContext, useContext, useEffect, useReducer } from "react";
import { likedReducer } from "../reducers";
import { getLikedDataHandler } from "../utils";
import { useAuth } from ".";
const defaultLikedState = {
	likedItemsCount: 0,
	itemsInLiked: [],
};

const LikedContext = createContext(defaultLikedState);

const LikedProvider = ({ children }) => {
	const [likedState, likedDispatch] = useReducer(
		likedReducer,
		defaultLikedState
	);
	const { authState } = useAuth();
	useEffect(
		() => authState.token?.length && getLikedDataHandler(likedDispatch),
		[authState]
	);
	return (
		<LikedContext.Provider
			value={{
				likedState,
				likedDispatch,
			}}
		>
			{children}
		</LikedContext.Provider>
	);
};

const useLiked = () => useContext(LikedContext);
export { useLiked, LikedProvider };
