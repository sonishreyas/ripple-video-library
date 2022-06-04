import { useDocumentTitle } from "custom-hooks";
import { WatchlaterContent } from "../components";

const WatchLaterPage = () => {
	useDocumentTitle("Watch Later | Ripple Play");
	return <WatchlaterContent />;
};
export { WatchLaterPage };
