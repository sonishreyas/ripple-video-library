import { useDocumentTitle } from "custom-hooks";
import { LikedContent } from "../components";

const LikedVideosPage = () => {
	useDocumentTitle("Liked | Ripple Play");
	return <LikedContent />;
};

export { LikedVideosPage };
