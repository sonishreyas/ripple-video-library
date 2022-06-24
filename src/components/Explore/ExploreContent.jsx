import { VideoCard, Filters, PlaylistModal } from "./";
import { usePlaylist } from "context";

const ExploreContent = () => {
	const { showPlaylistModal } = usePlaylist();
	return (
		<main className="main flex-column justify-content-start align-start w-100">
			<Filters />
			<VideoCard />
			{showPlaylistModal && <PlaylistModal />}
		</main>
	);
};

export { ExploreContent };
