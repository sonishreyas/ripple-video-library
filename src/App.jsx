import { Outlet } from "react-router-dom";
import { NavBar, Header, Footer } from "./components";
import { useNav } from "context";
import { AppRoutes } from "routes";
function App() {
	const { showNavbar } = useNav();
	return (
		<div className="grid-container">
			<Header />
			<AppRoutes />
			{showNavbar && <NavBar />}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
