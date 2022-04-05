import { useParams } from "react-router-dom";
import { useVideos, useHistory } from "../../context";
import {
	presentInArray,
	removeFromHistoryHandler,
	addToHistoryHandler,
} from "../../utils";
import { useEffect } from "react";
const VideoDetails = () => {
	const { videoId } = useParams();
	const { pauseHistory, historyState, historyDispatch } = useHistory();
	useEffect(() => {
		if (!pauseHistory) {
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
