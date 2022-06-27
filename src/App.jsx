import { Outlet, useLocation } from "react-router-dom";
import { NavBar, Header, Footer, PlaylistModal } from "./components";
import { useNav, usePlaylist } from "context";
import { AppRoutes } from "routes";
import { useEffect } from "react";

function App() {
	const { showNavbar, setShowNavbar } = useNav();
	const { showPlaylistModal } = usePlaylist();
	const location = useLocation();

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 768) setShowNavbar(false);
			else setShowNavbar(true);
		});
	}, [location]);

	useEffect(() => {
		if (window.innerWidth <= 768) setShowNavbar(false);
		else setShowNavbar(true);
	}, [location]);

	return (
		<div className="grid-container">
			<Header />
			<AppRoutes />
			{showNavbar && <NavBar />}
			{showPlaylistModal && <PlaylistModal />}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
