import axios from "axios";
import { formatDateTime } from "./date";
const HEADERS = {
	headers: {
		Accept: "*/*",
		authorization: localStorage.getItem("token"),
	},
};
/**
 * Add video data to watchlater
 * @param {*} element
 * @param {Object} videoData video to be added in watchlater
 * @param {string} token encodedToken of user
 * @param {function} watchlaterDispatch Reducer function
 */
const addToWatchlaterHandler = (element, videoId, watchlaterDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/watchlater`,
				{
					videoId: videoId,
				},
				HEADERS
			);
			watchlaterDispatch({
				type: "ADD_ITEM",
				payload: {
					watchlaterItemsCount: response.data.watchlater.length,
					itemsInWatchlater: {
						videoId: videoId,
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
 * Remove data from watchlater
 * @param element
 * @param {string} videoId videoId to remove from watchlater
 * @param {string} token encodedToken of user
 * @param {function} watchlaterDispatch Reducer function
 */
const removeFromWatchlaterHandler = (element, videoId, watchlaterDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(
				`/api/user/watchlater/${videoId}`,
				HEADERS
			);
			watchlaterDispatch({
				type: "REMOVE_ITEM",
				payload: {
					watchlaterItemsCount: response.data.watchlater.length,
					itemsInWatchlater: videoId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve watchlater data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} watchlaterDispatch Reducer function
 */
const getWatchlaterDataHandler = (watchlaterDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/watchlater`, HEADERS);
			watchlaterDispatch({
				type: "GET_ITEM",
				payload: {
					itemsInWatchlater: response.data.watchlater,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addToWatchlaterHandler,
	removeFromWatchlaterHandler,
	getWatchlaterDataHandler,
};
