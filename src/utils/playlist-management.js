import axios from "axios";
/**
 * Add video data to playlist
 * @param {*} element
 * @param {Object} videoData video to be added in playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const addNewPlaylistHandler = (element, playlistName, playlistDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/playlists`,
				{ playlist: { name: playlistName } },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			playlistDispatch({
				type: "ADD_NEW_PLAYLIST",
				payload: {
					playlists: response.data.playlists.slice(-1),
				},
			});
			playlistDispatch({
				type: "NEW_PLAYLIST_VALUE",
				payload: {
					newPlaylist: "",
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from playlist
 * @param element
 * @param {string} videoId videoId to remove from playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const updatePlaylistHandler = (
	element,
	playlistId,
	playlistName,
	playlistDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.put(
				`/api/user/playlists/${playlistId}`,
				{ playlist: { name: playlistName } },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			playlistDispatch({
				type: "UPDAYE_PLAYLIST_NAME",
				payload: {
					playlists: response.data.playlists,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from playlist
 * @param element
 * @param {string} videoId videoId to remove from playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const removePlaylistHandler = (element, playlistId, playlistDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			playlistDispatch({
				type: "REMOVE_PLAYLIST",
				payload: {
					playlists: response.data.playlists,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve playlist data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const getPlaylistDataHandler = (playlistDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/playlists`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			playlistDispatch({
				type: "GET_PLAYLISTS",
				payload: {
					playlists: response.data.playlists,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Add video data to playlist
 * @param {*} element
 * @param {Object} videoData video to be added in playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const addVideoToPlaylistHandler = (
	element,
	playlistId,
	videoId,
	playlistDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/playlists/${playlistId}`,
				{ video: { _id: videoId } },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			playlistDispatch({
				type: "ADD_NEW_VIDEO",
				payload: {
					playlists: response.data.playlist,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove video data to playlist
 * @param {*} element
 * @param {String} videoId video id of video to be removed from playlist
 * @param {String} playlistId playlist id of playlist from where we need to remove the video
 * @param {function} playlistDispatch Reducer function
 */
const removeVideoFromPlaylistHandler = (
	element,
	playlistId,
	videoId,
	playlistDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(
				`/api/user/playlists/${playlistId}/${videoId}`,
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			playlistDispatch({
				type: "REMOVE_VIDEO",
				payload: {
					playlists: response.data.playlist,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};
export {
	addNewPlaylistHandler,
	updatePlaylistHandler,
	removePlaylistHandler,
	getPlaylistDataHandler,
	addVideoToPlaylistHandler,
	removeVideoFromPlaylistHandler,
};
