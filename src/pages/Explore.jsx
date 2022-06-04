import { useDocumentTitle } from "custom-hooks";
import { ExploreContent } from "../components";
const ExplorePage = () => {
	useDocumentTitle("Home | Ripple Play");
	return <ExploreContent />;
};

export { ExplorePage };
