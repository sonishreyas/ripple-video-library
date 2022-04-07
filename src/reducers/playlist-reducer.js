import { removeFromArray } from "../utils";

const updateVideos = (playlists, actionPlaylist) =>
	playlists.reduce(
		(prev, curr) =>
			curr._id === actionPlaylist._id
				? [...prev, { ...curr, ...actionPlaylist }]
				: [...prev, { ...curr }],
		[]
	);

const removeVideoFromPlaylist = (playlists, actionPlaylist) =>
	playlists.reduce(
		(prev, curr) =>
			curr._id === actionPlaylist._id
				? [...prev, { ...actionPlaylist }]
				: [...prev, { ...curr }],
		[]
	);

/**
 * Reducer function to handle playlist state
 * @param {Object} playlistState State values of playlist
 * @param {*} playlistAction The changed state
 * @returns Updated state into playlistState
 */
const playlistReducer = (playlistState, { type, payload }) => {
	switch (type) {
		case "ADD_NEW_PLAYLIST":
			return {
				...playlistState,
				playlists: [...playlistState.playlists, ...payload.playlists],
			};

		case "REMOVE_PLAYLIST":
			return {
				...playlistState,
				playlists: [...payload.playlists],
			};
		case "GET_PLAYLIST":
			return {
				...playlistState,
				playlists: [...payload.playlists],
			};
		case "NEW_PLAYLIST_VALUE":
			return {
				...playlistState,
				newPlaylist: payload.newPlaylist,
			};
		case "UPDATE_SELECTED_VIDEO_ID":
			return {
				...playlistState,
				selectedVideoId: payload.selectedVideoId,
			};
		case "ADD_NEW_VIDEO":
			return {
				...playlistState,
				playlists: updateVideos(playlistState.playlists, payload.playlists),
			};
		case "REMOVE_VIDEO":
			return {
				...playlistState,
				playlists: removeVideoFromPlaylist(
					playlistState.playlists,
					payload.playlists
				),
			};
		case "UPDAYE_PLAYLIST_NAME":
			return {
				...playlistState,
				playlists: [...payload.playlists],
			};
		case "RESET":
			return {
				...playlistState,
				playlists: [],
				newPlaylist: "",
				selectedVideoId: "",
			};
		default:
			return playlistState;
	}
};

export { playlistReducer };
