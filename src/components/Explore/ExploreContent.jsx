import { VideoCard, Filters, PlaylistModal } from "./";
import { usePlaylist } from "../../context";

const ExploreContent = () => {
	const { showPlaylistModal } = usePlaylist();
	return (
		<main className="main">
			<Filters />
			<VideoCard />
			{showPlaylistModal && <PlaylistModal />}
		</main>
	);
};

export { ExploreContent };
