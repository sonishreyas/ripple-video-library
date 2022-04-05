import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { watchlaterReducer } from "../reducers";
import { getWatchlaterDataHandler } from "../utils";

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
	useEffect(() => getWatchlaterDataHandler(watchlaterDispatch), []);
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
