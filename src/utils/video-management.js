import axios from "axios";

/**
 * Add comment to a video
 * @param {Element} e Element
 * @param {string} videoId Video Id of the video we need to add comment to
 * @param {function} setFilteredVideosData Updates video data
 * @param {Array} videosData videos Data
 * @param {Object} comment Comment data to be inserted
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
