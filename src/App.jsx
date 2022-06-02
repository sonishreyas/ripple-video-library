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
import { RequireAuth } from "routes";
function App() {
	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Explore />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/videos/:videoId" element={<VideosDetails />} />
				<Route element={<RequireAuth />}>
					<Route path="/history" element={<WatchHistory />} />
					<Route path="/playlist" element={<Playlist />} />
					<Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
					<Route path="/liked" element={<LikedVideos />} />
					<Route path="/watchlater" element={<WatchLater />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="/mock" element={<Mockman />} />
			</Routes>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
