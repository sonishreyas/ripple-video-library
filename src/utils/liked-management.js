import axios from "axios";
import { formatDateTime } from "./date";
/**
 * Add video data to liked
 * @param {*} element
 * @param {Object} videoData video to be added in liked
 * @param {string} token encodedToken of user
 * @param {function} likedDispatch Reducer function
 */
const addToLikedHandler = (e, videoId, likedDispatch) => {
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

/**
 * Remove data from liked
 * @param element
 * @param {string} videoId videoId to remove from liked
 * @param {string} token encodedToken of user
 * @param {function} likedDispatch Reducer function
 */
const removeFromLikedHandler = (e, videoId, likedDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/likes/${videoId}`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			likedDispatch({
				type: "REMOVE_ITEM",
				payload: {
					likedItemsCount: response.data.likes.length,
					itemsInLiked: videoId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve liked data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} likedDispatch Reducer function
 */
const getLikedDataHandler = (likedDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/likes`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			likedDispatch({
				type: "GET_ITEM",
				payload: {
					itemsInLiked: response.data.liked,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addToLikedHandler, removeFromLikedHandler, getLikedDataHandler };
