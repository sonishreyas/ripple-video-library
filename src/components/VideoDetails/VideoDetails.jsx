import { useParams } from "react-router-dom";
import { useVideos, useHistory, useAuth } from "../../context";
import {
	presentInArray,
	removeFromHistoryHandler,
	addToHistoryHandler,
} from "../../utils";
import { useEffect } from "react";
const VideoDetails = () => {
	const { videoId } = useParams();
	const { authState } = useAuth();
	const { pauseHistory, historyState, historyDispatch } = useHistory();
	useEffect(() => {
		console.log("executed", authState);
		if (!pauseHistory && authState.token.length) {
			if (presentInArray(historyState.itemsInHistory, videoId)) {
				removeFromHistoryHandler(videoId, historyDispatch);
				addToHistoryHandler(videoId, historyDispatch);
			} else {
				addToHistoryHandler(videoId, historyDispatch);
			}
		}
	}, []);
	return (
		<>
			<h1> Videos Details {videoId}</h1>
		</>
	);
};
export { VideoDetails };
