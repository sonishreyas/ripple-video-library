import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Authentication,
	Home,
	WatchHistory,
	Playlist,
	LikedVideos,
	WatchLater,
	Profile,
	Explore,
} from "./pages";
import { NavBar, Header, Footer } from "./components";
import Mockman from "mockman-js";
function App() {
	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/history" element={<WatchHistory />} />
				<Route path="/playlist" element={<Playlist />} />
				<Route path="/liked" element={<LikedVideos />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/mock" element={<Mockman />} />
			</Routes>
			<NavBar />
			<Footer />
		</div>
	);
}

export default App;
