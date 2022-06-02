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
				<Route path="/videos/:videoId" element={<VideosDetails />} />
				<Route
					path="/history"
					element={
						<RequireAuth>
							<WatchHistory />
						</RequireAuth>
					}
				/>
				<Route
					path="/playlist"
					element={
						<RequireAuth>
							<Playlist />
						</RequireAuth>
					}
				/>
				<Route
					path="/playlist/:playlistId"
					element={
						<RequireAuth>
							<PlaylistDetails />
						</RequireAuth>
					}
				/>
				<Route
					path="/liked"
					element={
						<RequireAuth>
							<LikedVideos />
						</RequireAuth>
					}
				/>
				<Route
					path="/watchlater"
					element={
						<RequireAuth>
							<WatchLater />
						</RequireAuth>
					}
				/>
				<Route path="/auth" element={<Authentication />} />
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route path="/mock" element={<Mockman />} />
			</Routes>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
