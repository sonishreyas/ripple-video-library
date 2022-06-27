import { usePlaylist } from "context";
import { addNewPlaylistHandler } from "utils";
import { useState } from "react";

const CreatePlaylist = () => {
	const { playlistState, playlistDispatch, setShowCreatePlaylist } =
		usePlaylist();
	const handleValueChange = (e) =>
		playlistDispatch({
			type: "NEW_PLAYLIST_VALUE",
			payload: {
				newPlaylist: e.target.value,
			},
		});
	const [focus, setFocus] = useState(false);

	const createPlaylistSubmitHandler = (e) => {
		if (playlistState.newPlaylist.length) {
			addNewPlaylistHandler(e, playlistState.newPlaylist, playlistDispatch);
			setShowCreatePlaylist(false);
		}
	};
	const handleCreatePlaylistDismiss = () => setShowCreatePlaylist(false);
	return (
		<div className="flex-column justify-content-center align-center my-5 ">
			<section
				className={`input-container flex-column m-5 pr-10 ${
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
			<section className="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0 w-100">
				<button
					className="cursor-pointer primary-btn save-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
					type="button"
					onClick={createPlaylistSubmitHandler}
				>
					Save
				</button>
				<button
					className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
					type="button"
					onClick={handleCreatePlaylistDismiss}
				>
					Cancel
				</button>
			</section>
		</div>
	);
};

export { CreatePlaylist };
