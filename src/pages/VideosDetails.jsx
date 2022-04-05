import { useParams } from "react-router-dom";
const VideosDetails = () => {
	const { videoId } = useParams();
	return (
		<>
			<h1> Videos Details {videoId}</h1>
		</>
	);
};
export { VideosDetails };
