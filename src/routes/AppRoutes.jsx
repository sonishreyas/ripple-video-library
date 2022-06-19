import { PlaylistDetails } from "components";
import {
	Authentication,
	WatchHistory,
	Playlist,
	LikedVideos,
	WatchLater,
	Profile,
	Explore,
	VideosDetails,
	PageNotFound,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "routes";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Explore />} />
			<Route path="/videos/:videoId" element={<VideosDetails />} />
			<Route path="/auth" element={<Authentication />} />
			<Route element={<RequireAuth />}>
				<Route path="/history" element={<WatchHistory />} />
				<Route path="/playlist" element={<Playlist />} />
				<Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
				<Route path="/liked" element={<LikedVideos />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="/profile" element={<Profile />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
