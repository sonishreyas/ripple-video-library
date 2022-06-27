import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { watchlaterReducer } from "../reducers";
import { useAuth } from ".";
import { getWatchlaterDataHandler } from "utils";

const defaultWatchlaterState = {
	watchlaterItemsCount: 0,
	itemsInWatchlater: [],
};

const WatchlaterContext = createContext(defaultWatchlaterState);

const WatchlaterProvider = ({ children }) => {
	const [watchlaterState, watchlaterDispatch] = useReducer(
		watchlaterReducer,
		defaultWatchlaterState
	);
	const { authState } = useAuth();
	useEffect(
		() =>
			authState.token?.length && getWatchlaterDataHandler(watchlaterDispatch),
		[authState]
	);
	return (
		<WatchlaterContext.Provider
			value={{
				watchlaterState,
				watchlaterDispatch,
			}}
		>
			{children}
		</WatchlaterContext.Provider>
	);
};

const useWatchlater = () => useContext(WatchlaterContext);
export { useWatchlater, WatchlaterProvider };
