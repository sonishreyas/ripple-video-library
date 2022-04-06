import { useParams } from "react-router-dom";
import { useVideos, useHistory, useAuth, useLiked } from "../../context";
import {
	presentInArray,
	removeFromHistoryHandler,
	addToHistoryHandler,
	getDataFromId,
	presentObjInArray,
} from "../../utils";
import { LikeButton } from "./VideoButtons";
import { useEffect } from "react";
const VideoDetails = () => {
	const { videoId } = useParams();
	const { authState } = useAuth();
	const { videosData } = useVideos();
	const { pauseHistory, historyState, historyDispatch } = useHistory();
	const video = getDataFromId([{ videoId: videoId }], videosData)[0];
	const { likedState } = useLiked();
	useEffect(() => {
		if (!pauseHistory && authState.token?.length) {
			if (presentInArray(historyState.itemsInHistory, videoId)) {
				removeFromHistoryHandler(videoId, historyDispatch);
				addToHistoryHandler(videoId, historyDispatch);
			} else {
				addToHistoryHandler(videoId, historyDispatch);
			}
		}
	}, []);
	return (
		<div className="flex-column">
			<iframe
				className="video-iframe"
				src={video.videoIframe}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<h3>{video.title}</h3>
			<div className="flex-row justify-content-space-between">
				<div>
					<p>
						{video.views} {video.views < 2 ? "View" : "Views"}
					</p>
				</div>
				<div className="flex-row justify-content-center align-center">
					{authState.token.length ? (
						presentObjInArray(likedState.itemsInLiked, videoId) ? (
							<LikeButton btnType="remove" videoId={videoId} />
						) : (
							<LikeButton btnType="add" videoId={videoId} />
						)
					) : (
						<LikeButton btnType="redirect" />
					)}
				</div>
			</div>
		</div>
	);
};
export { VideoDetails };
