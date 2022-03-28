import {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";
import { videosReducer, sortByReducer } from "../reducers";
import { VideosCompose, CategoryVideos } from "../utils";
import { useVideosDataHook, useCategoriesDataHook } from "../custom-hooks";

const getDefaultVideosState = (categoriesData) => {
	return {
		categoryType: "GET_ALL",
		categoryName: "",
		categoryFilters: categoriesData.reduce((prev, curr) => {
			prev[curr.categoryName] = false;
			return prev;
		}, {}),
	};
};

const VideosContext = createContext({});

const VideosProvider = ({ children }) => {
	const videosData = useVideosDataHook();
	const categoriesData = useCategoriesDataHook();

	const [defaultVideosState, setDefaultVideosState] = useState({});
	useEffect(() => {
		if (categoriesData.length !== 0 && videosData.length !== 0) {
			setDefaultVideosState(getDefaultVideosState(categoriesData));
		}
	}, [categoriesData]);

	const [videosState, videosDispatch] = useReducer(
		videosReducer,
		defaultVideosState
	);

	useEffect(() => {
		if (Object.keys(defaultVideosState).length !== 0) {
			videosDispatch({ ...defaultVideosState });
		}
	}, [defaultVideosState]);

	const [filteredVideosData, setFilteredVideosData] = useState(videosData);
	useEffect(() => {
		if (videosData.length !== 0 && Object.keys(videosState).length !== 0) {
			setFilteredVideosData(
				VideosCompose(videosState, CategoryVideos, sortByReducer)(videosData)
			);
		}
	}, [videosData, videosState]);

	return (
		<VideosContext.Provider
			value={{
				videosState,
				videosData: filteredVideosData,
				categoriesData: categoriesData,
				videosDispatch,
				clearFilters: defaultVideosState,
			}}
		>
			{children}
		</VideosContext.Provider>
	);
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
