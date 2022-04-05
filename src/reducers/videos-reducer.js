/**
 *
 * @param {Object} videosState State values for videos
 * @param {Array} payload The changed state
 * @returns Updates videosState value
 */
const videosReducer = (videosState, { type, payload }) => {
	switch (type) {
		case "VIDEOS_SORT_BY":
			return {
				...videosState,
				sortByType: payload.sortByType,
			};
		case "FILTER_CATEGORY":
			return {
				...videosState,
				categoryName: payload.categoryName,
				categoryType: payload.categoryType,
				categoryFilters: { ...payload.categoryFilters },
			};
		case "GET_DATA":
			return { ...videosState, ...payload };
		default:
			return videosState;
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
