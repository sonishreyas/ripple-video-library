import { usePlaylist } from "context";
import { Link } from "react-router-dom";
import { AddPlaylistBtn, CreatePlaylist } from "../Explore";

const PlaylistListing = () => {
	const { playlistState } = usePlaylist();
	const { showCreatePlaylist } = usePlaylist();
	return (
		<div className="flex-row flex-gap-2">
			{showCreatePlaylist && <CreatePlaylist />}
			{!showCreatePlaylist && <AddPlaylistBtn />}
			{playlistState.playlists.length ? (
				playlistState.playlists.map(({ _id, name }) => (
					<Link
						to={`/playlist/${_id}`}
						className="no-link card basic-card playlist-basic-card flex-row align-center flex-wrap card-shadow p-10 b-radius-2 overflow-hidden"
						key={_id}
					>
						<h3 className="name p-2 text-center">{name}</h3>
					</Link>
				))
			) : (
				<></>
			)}
		</div>
	);
};

export { PlaylistListing };
