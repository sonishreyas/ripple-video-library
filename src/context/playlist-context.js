import {
	createContext,
	useContext,
	useEffect,
	useState,
	useReducer,
} from "react";
import { playlistReducer } from "../reducers";
import { getPlaylistDataHandler } from "../utils";

const defaultPlaylistState = {
	playlists: [],
	newPlaylist: "",
	selectedVideoId: "",
};

const PlaylistContext = createContext(defaultPlaylistState);

const PlaylistProvider = ({ children }) => {
	const [playlistState, playlistDispatch] = useReducer(
		playlistReducer,
		defaultPlaylistState
	);
	const [showPlaylistModal, setShowPlaylistModal] = useState(false);
	const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
	const [showEditPlaylist, setShowEditPlaylist] = useState(false);
	useEffect(() => getPlaylistDataHandler(playlistDispatch), []);
	return (
		<PlaylistContext.Provider
			value={{
				playlistState,
				playlistDispatch,
				showPlaylistModal,
				setShowPlaylistModal,
				showCreatePlaylist,
				setShowCreatePlaylist,
				showEditPlaylist,
				setShowEditPlaylist,
			}}
		>
			{children}
		</PlaylistContext.Provider>
	);
};

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
