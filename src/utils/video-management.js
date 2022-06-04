/**
 * Add video data to liked
 * @param {*} element
 * @param {Object} videoData video to be added in liked
 * @param {string} token encodedToken of user
 * @param {function} likedDispatch Reducer function
 */
const addCommentHandler = (e, videoId, videosDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/likes`,
				{
					videoId: videoId,
				},
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			likedDispatch({
				type: "ADD_ITEM",
				payload: {
					likedItemsCount: response.data.likes.length,
					itemsInLiked: {
						_id: videoId,
						updatedAt: formatDateTime(),
					},
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addCommentHandler };
