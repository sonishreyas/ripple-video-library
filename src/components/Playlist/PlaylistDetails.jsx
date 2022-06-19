import { useParams, Navigate } from "react-router-dom";
import { usePlaylist, useVideos } from "context";
import { VideoHorizontalCard } from "../VideoHorizontalCard";
import {
	getDataFromPlaylist,
	getVideosFromPlaylist,
	removeVideoFromPlaylistHandler,
	removePlaylistHandler,
} from "utils";
import { PlaylistListing } from "./PlaylistListing";
import { EditPlaylistName } from "./EditPlaylistName";

const PlaylistDetails = () => {
	const { playlistId } = useParams();
	const {
		playlistState,
		playlistDispatch,
		showEditPlaylist,
		setShowEditPlaylist,
	} = usePlaylist();
	const { videosData } = useVideos();
	const playlist = playlistState.playlists.find(
		(playlist) => playlist._id === playlistId
	);
	const playlistData =
		playlist && getDataFromPlaylist(playlistState.playlists, playlistId);
	const videos =
		playlist && getVideosFromPlaylist(playlistData.videos, videosData);
	const itemCount = playlist && playlistData.videos.length;
	const handleDeleteVideoFromPlaylist = (e, videoId) =>
		removeVideoFromPlaylistHandler(e, playlistId, videoId, playlistDispatch);

	const handleDeletePlaylist = (e) =>
		removePlaylistHandler(e, playlistId, playlistDispatch);

	const handleEditPlaylistName = () => {
		playlistDispatch({
			type: "NEW_PLAYLIST_VALUE",
			payload: {
				newPlaylist: playlist?.name,
			},
		});
		setShowEditPlaylist(true);
	};

	return (
		<main className="main">
			{playlist ? (
				<div className="flex-row flex-wrap flex-gap-2 m-5">
					<div className="flex-column flex-gap-2">
						<div className="cursor-pointer card card-shadow p-5 b-radius-2 h-auto">
							<section className="flex-row justify-content-start align-start">
								<img
									src={
										videos.length
											? videos[0].thumbnailURL
											: "https://i.ytimg.com/img/no_thumbnail.jpg"
									}
									alt="Playlists"
									className="details-card-img b-radius-2"
								/>
							</section>
						</div>
						{showEditPlaylist ? (
							<EditPlaylistName playlistId={playlistId} />
						) : (
							<h2 className="px-5 text-bold">{playlistData.name}</h2>
						)}
						<div className="flex-row">
							<i
								className="fa-solid fa-pen-to-square p-5 cursor-pointer"
								onClick={handleEditPlaylistName}
							></i>
							<i
								className="fa-solid fa-trash p-5 cursor-pointer"
								onClick={handleDeletePlaylist}
							></i>
						</div>
					</div>
					<VideoHorizontalCard
						itemCount={itemCount}
						videos={videos}
						handleDelete={handleDeleteVideoFromPlaylist}
					/>
				</div>
			) : (
				<Navigate replace to="/playlist" element={<PlaylistListing />} />
			)}
		</main>
	);
};

export { PlaylistDetails };
