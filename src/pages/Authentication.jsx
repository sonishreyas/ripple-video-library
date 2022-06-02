import { useDocumentTitle } from "custom-hooks";
import { AuthContent } from "../components";
const AuthenticationPage = () => {
	useDocumentTitle("Auth | Ripple Play");
	return <AuthContent />;
};

export { AuthenticationPage };
