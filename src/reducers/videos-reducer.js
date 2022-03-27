/**
 *
 * @param {Object} videosState State values for videos
 * @param {Array} videosAction The changed state
 * @returns Updates videosState value
 */
const videosReducer = (videosState, videosAction) => {
	switch (videosAction.categoryType) {
		case "VIDEOS_SORT_BY":
			return {
				...videosState,
				sortByType: videosAction.sortByType,
			};
		case "FILTER_CATEGORY":
			return {
				...videosState,
				categoryName: videosAction.categoryName,
				categoryType: videosAction.categoryType,
				categoryFilters: { ...videosAction.categoryFilters },
			};
		default:
			return { ...videosState, ...videosAction };
	}
};

/**
 *
 * @param {Object} videosState State values for videos
 * @param {Array} videosData Array of videos
 * @returns Sorted Array of videos
 */
const sortByReducer = (videosState, videosData) => {
	switch (videosState.sortByType) {
		case "SORT_BY_LATEST_VIDEOS":
			return [...videosData].sort(
				(currVideo, nextVideo) => currVideo.uploadDate - nextVideo.uploadDate
			);
		case "SORT_BY_LIKES":
			return [...videosData].sort(
				(currVideo, nextVideo) => nextVideo.likes - currVideo.likes
			);
		case "SORT_BY_VIEWS":
			return [...videosData].sort(
				(currVideo, nextVideo) => nextVideo.views - currVideo.views
			);
		default:
			return videosData;
	}
};

export { videosReducer, sortByReducer };
