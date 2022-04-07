import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import {
	Authentication,
	Home,
	WatchHistory,
	Playlist,
	LikedVideos,
	WatchLater,
	Profile,
	Explore,
	VideosDetails,
} from "./pages";
import { PlaylistDetails, NavBar, Header, Footer } from "./components";
import Mockman from "mockman-js";
function App() {
	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/videos/:videoId" element={<VideosDetails />} />
				<Route path="/history" element={<WatchHistory />} />
				<Route path="/playlist" element={<Playlist />} />
				<Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
				<Route path="/liked" element={<LikedVideos />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/mock" element={<Mockman />} />
			</Routes>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
