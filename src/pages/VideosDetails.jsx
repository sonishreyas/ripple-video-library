import { useDocumentTitle } from "custom-hooks";
import { VideoDetails } from "../components";
const VideosDetailsPage = () => {
	useDocumentTitle("Video | Ripple Play");
	return <VideoDetails />;
};
export { VideosDetailsPage };
