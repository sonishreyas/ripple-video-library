import { VideoHorizontalCard } from ".";
import { useVideos, useLiked } from "../../context";
import { getDataFromId, removeFromLikedHandler } from "../../utils";
const LikedContent = () => {
	const { likedState, likedDispatch } = useLiked();
	const { videosData } = useVideos();
	const videos = getDataFromId(likedState.itemsInLiked, videosData);
	const itemCount = videos.length;
	const handleDeleteFromLiked = (e, videoId) =>
		removeFromLikedHandler(e, videoId, likedDispatch);
	return (
		<main className="main">
			<div className="flex-row flex-wrap flex-gap-2 m-5">
				<div className="flex-column flex-gap-2">
					<div className="cursor-pointer card card-shadow p-5 b-radius-2 h-auto">
						<section className="flex-row justify-content-start align-start">
							<img
								src={
									videos.length
										? videos[0].thumbnailURL
										: "https://i.ytimg.com/img/no_thumbnail.jpg"
								}
								alt="Playlists"
								className="details-card-img b-radius-2"
							/>
						</section>
					</div>
					<h2 className="px-5 text-bold">Liked Videos</h2>
					<h3 className="px-5">
						{itemCount} {`${itemCount < 2 ? "Video" : "Videos"}`}
					</h3>
				</div>

				<VideoHorizontalCard
					itemCount={itemCount}
					videos={videos}
					handleDelete={handleDeleteFromLiked}
				/>
			</div>
		</main>
	);
};

export { LikedContent };
