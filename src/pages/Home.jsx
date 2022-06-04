import { useDocumentTitle } from "custom-hooks";
import { HomeContent } from "../components";
const HomePage = () => {
	useDocumentTitle("Home | Ripple Play");
	return <HomeContent />;
};

export { HomePage };
