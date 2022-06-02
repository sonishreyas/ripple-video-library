import { useDocumentTitle } from "custom-hooks";
import { ProfileContent } from "../components";

const ProfilePage = () => {
	useDocumentTitle("Profile | Ripple Play");
	return <ProfileContent />;
};

export { ProfilePage };
