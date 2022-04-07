import { usePlaylist } from "../../context";

const AddPlaylistBtn = () => {
	const { setShowCreatePlaylist } = usePlaylist();
	const handleCreatePlaylist = () => setShowCreatePlaylist(true);
	return (
		<button
			className="cursor-pointer outline-btn p-3 b-radius-2 mx-5 my-0 text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 address-btn"
			onClick={handleCreatePlaylist}
		>
			<span>
				<i className="fas fa-plus social"></i>
			</span>
			<p className="btn-text">Add new playlist</p>
		</button>
	);
};

export { AddPlaylistBtn };
