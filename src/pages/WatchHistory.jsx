import { useDocumentTitle } from "custom-hooks";
import { HistoryContent } from "../components";
const WatchHistoryPage = () => {
	useDocumentTitle("Watch History | Ripple Play");
	return <HistoryContent />;
};
export { WatchHistoryPage };
