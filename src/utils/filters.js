/**
 *
 * @param {Object} videosState State values for videos
 * @param  {...any} functions Any function that is called
 * @returns {array} Filtered data based on the functions called.
 */
const VideosCompose =
	(videosState, ...functions) =>
	(videosData) =>
		functions.reduce((prev, curr) => curr(videosState, prev), videosData);

/**
 *
 * @param {Object} videosState State values for videos
 * @param {array} videosData videos Data
 * @returns {array} Array of videos filtered based on selected categories
 */
const CategoryVideos = (videosState, videosData) =>
	Object.keys(videosState.categoryFilters).filter(
		(item) => videosState.categoryFilters[item]
	).length !== 0
		? Object.keys(videosState.categoryFilters).reduce(
				(prev, curr) =>
					videosState.categoryFilters[curr]
						? [
								...prev,
								...videosData.filter(
									(video) =>
										video.category.filter(
											(videoCategory) =>
												videoCategory.toLowerCase() === curr.toLowerCase()
										).length !== 0
								),
						  ]
						: prev,
				[]
		  )
		: videosData;

export { CategoryVideos, VideosCompose };
