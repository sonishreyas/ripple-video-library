import {
	createContext,
	useContext,
	useEffect,
	useState,
	useReducer,
} from "react";
import { historyReducer } from "../reducers";
import { getHistoryDataHandler } from "../utils";
import { useAuth } from ".";
const defaultHistoryState = {
	historyItemsCount: 0,
	itemsInHistory: [],
};

const HistoryContext = createContext(defaultHistoryState);

const HistoryProvider = ({ children }) => {
	const [historyState, historyDispatch] = useReducer(
		historyReducer,
		defaultHistoryState
	);
	const [pauseHistory, setPauseHistory] = useState(false);
	const { authState } = useAuth();
	useEffect(
		() => authState.token?.length && getHistoryDataHandler(historyDispatch),
		[authState]
	);
	return (
		<HistoryContext.Provider
			value={{
				historyState,
				historyDispatch,
				pauseHistory,
				setPauseHistory,
			}}
		>
			{children}
		</HistoryContext.Provider>
	);
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
