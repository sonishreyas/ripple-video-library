import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";

const AddToPlaylistBtn = (props) => {
	const { setShowPlaylistModal, playlistDispatch } = usePlaylist();
	const { videoId } = props;
	const handleShowPlaylist = () => {
		setShowPlaylistModal(true);
		playlistDispatch({
			type: "UPDATE_SELECTED_VIDEO_ID",
			payload: {
				selectedVideoId: videoId,
			},
		});
	};
	return (
		<>
			{props.btnType === "add" && (
				<button
					className="cursor-pointer primary-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
					onClick={handleShowPlaylist}
				>
					<span>
						<i className="fas fa-folder-plus social"></i>
					</span>
					<p>Add to Playlist</p>
				</button>
			)}

			{props.btnType === "redirect" && (
				<Link
					to="/auth"
					state={{ state: "/explore" }}
					className="no-link-decoration cursor-pointer primary-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
				>
					<span>
						<i className="fas fa-folder-plus social"></i>
					</span>
					<p>Add to Playlist</p>
				</Link>
			)}
		</>
	);
};
export { AddToPlaylistBtn };
