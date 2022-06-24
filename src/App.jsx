import { Outlet } from "react-router-dom";
import { NavBar, Header, Footer } from "./components";
import { useNav } from "context";
import { AppRoutes } from "routes";
import { useEffect } from "react";

function App() {
	const { showNavbar, setShowNavbar } = useNav();
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 768) setShowNavbar(false);
			else setShowNavbar(true);
		});
	}, [location]);
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
