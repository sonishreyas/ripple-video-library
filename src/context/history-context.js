import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { historyReducer } from "../reducers";
import { getHistoryDataHandler } from "../utils";

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
	useEffect(() => getHistoryDataHandler(historyDispatch), []);
	return (
		<HistoryContext.Provider
			value={{
				historyState,
				historyDispatch,
			}}
		>
			{children}
		</HistoryContext.Provider>
	);
};

const useHistory = () => useContext(HistoryContext);
export { useHistory, HistoryProvider };
