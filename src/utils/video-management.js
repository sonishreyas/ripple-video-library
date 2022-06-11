import axios from "axios";

/**
 * Add video data to liked
 * @param {*} element
 * @param {Object} videoData video to be added in liked
 * @param {string} token encodedToken of user
 * @param {function} likedDispatch Reducer function
 */
const addCommentHandler = (
	e,
	videoId,
	setFilteredVideosData,
	videosData,
	comment
) => {
	e.preventDefault();
	(async () => {
		console.log(comment);
		try {
			const response = await axios.post(
				`/api/video/${videoId}`,
				{
					comment: comment,
				},
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			setFilteredVideosData(
				videosData.reduce(
					(prev, curr) =>
						curr._id === videoId
							? [
									...prev,
									{
										...curr,
										comments: [...curr.comments, { ...comment }],
									},
							  ]
							: [...prev, { ...curr }],
					[]
				)
			);
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addCommentHandler };
