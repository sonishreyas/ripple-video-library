import { VideoHorizontalCard } from ".";
const WatchlaterContent = () => {
	const { watchlaterState } = useWatchlater();
	const { videosData } = useVideos();
	// const videos = getVideosFromPlaylist(playlistData.videos, videosData);
	// const itemCount = playlist && playlistData.videos.length;
	return (
		<main className="main">
			<VideoHorizontalCard />
		</main>
	);
};

export { WatchlaterContent };
