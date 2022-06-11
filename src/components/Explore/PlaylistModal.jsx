import { usePlaylist } from "context";
import { AddPlaylistBtn, CreatePlaylist } from ".";
import { addVideoToPlaylistHandler, checkIdPresentInArray } from "utils";

const PlaylistModal = () => {
	const {
		playlistState,
		showCreatePlaylist,
		setShowCreatePlaylist,
		setShowPlaylistModal,
		playlistDispatch,
	} = usePlaylist();
	const handlePlaylistModal = () => {
		setShowCreatePlaylist(false);
		setShowPlaylistModal(false);
		playlistDispatch({
			type: "UPDATE_SELECTED_VIDEO_ID",
			payload: {
				selectedVideoId: "",
			},
		});
	};
	const videoHandler = (e, playlistId, videoId) =>
		addVideoToPlaylistHandler(e, playlistId, videoId, playlistDispatch);
	return (
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content playlist-modal-container">
				<ul className="radio-btn-container outline-container b-radius-2  p-5 m-10">
					<li
						className="profile-header flex-row justify-content-space-between align-center flex-wrap my-0 mx-0"
						key="playlist-header"
					>
						<h3 className="form-heading text-bold p-2">Playlists</h3>
						<i
							className="far fa-times-circle rui-cross b-radius-circle card-dismiss-btn m-3 p-1"
							onClick={handlePlaylistModal}
						></i>
					</li>
					{playlistState.playlists?.map(({ name, videos, _id }) => (
						<li className="no-list w-100 my-2" key={_id}>
							<label
								className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer overflow-hidden ${
									checkIdPresentInArray(videos, playlistState.selectedVideoId)
										? " fliter-chip-selected"
										: ""
								}`}
							>
								<input
									className="filters"
									type="checkbox"
									value={name}
									checked={
										checkIdPresentInArray(videos, playlistState.selectedVideoId)
											? true
											: false
									}
									onChange={(e) =>
										videoHandler(e, _id, playlistState.selectedVideoId)
									}
								/>
								<i className="fa-solid fa-circle-check"></i>
								<p className="basic-chip-content">{name}</p>
							</label>
						</li>
					))}
					{showCreatePlaylist && (
						<li key="create-playlist" className="no-list">
							<CreatePlaylist />
						</li>
					)}
					{!showCreatePlaylist && (
						<li
							key="add-playlist-btn"
							className="no-list form-heading text-bold py-5 px-0 h4"
						>
							<AddPlaylistBtn />
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export { PlaylistModal };
