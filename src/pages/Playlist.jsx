import { useDocumentTitle } from "custom-hooks";
import { PlaylistContent } from "../components";
const PlaylistPage = () => {
	useDocumentTitle("Playlists | Ripple Play");
	return <PlaylistContent />;
};

export { PlaylistPage };
