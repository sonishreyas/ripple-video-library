import { usePlaylist } from "../../context";
import { updatePlaylistHandler } from "../../utils";
import { useState } from "react";

const EditPlaylistName = ({ playlistId }) => {
	const { playlistState, playlistDispatch, setShowEditPlaylist } =
		usePlaylist();
	const handleValueChange = (e) =>
		playlistDispatch({
			type: "NEW_PLAYLIST_VALUE",
			payload: {
				newPlaylist: e.target.value,
			},
		});
	const [focus, setFocus] = useState(false);

	const editPlaylistSubmitHandler = (e) => {
		if (playlistState.newPlaylist.length) {
			updatePlaylistHandler(
				e,
				playlistId,
				playlistState.newPlaylist,
				playlistDispatch
			);
			setShowEditPlaylist(false);
		}
	};
	const handleEditPlaylistDismiss = () => {
		setShowEditPlaylist(false);
		playlistDispatch({
			type: "NEW_PLAYLIST_VALUE",
			payload: {
				newPlaylist: "",
			},
		});
	};
	return (
		<div classname="flex-column justify-content-center align-center my-5 ">
			<section
				className={`input-container flex-column m-5 pr-10 w-100 ${
					focus || playlistState.newPlaylist.length ? "focused" : ""
				}`}
				key="new-playlist-input"
			>
				<input
					id="new-playlist"
					className="textbox-content p-5"
					type="text"
					name="newPlaylist"
					onChange={handleValueChange}
					value={playlistState.newPlaylist}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>
				<label htmlFor="newPlaylist" className="textbox-label m-0 px-1">
					New Playlist
				</label>
			</section>
			<section className="card-footer  flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0">
				<button
					className="cursor-pointer primary-btn save-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
					type="button"
					onClick={editPlaylistSubmitHandler}
				>
					Save
				</button>
				<button
					className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
					type="button"
					onClick={handleEditPlaylistDismiss}
				>
					Cancel
				</button>
			</section>
		</div>
	);
};

export { EditPlaylistName };
