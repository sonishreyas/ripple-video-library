import { useParams } from "react-router-dom";
import { useVideos, useHistory, useAuth, useLiked } from "../../context";
import {
	removeFromHistoryHandler,
	addToHistoryHandler,
	getDataFromId,
	presentObjInArray,
	getCountValue,
	CategoryVideos,
	presentInArray,
} from "../../utils";
import { LikeButton } from "./VideoButtons";
import { useEffect, useState } from "react";
import { SimilarVideosCards } from "./SimilarVideoCards";
const VideoDetails = () => {
	const { videoId } = useParams();
	const { authState } = useAuth();
	const { videosData, videosDispatch, videosState } = useVideos();
	const { pauseHistory, historyState, historyDispatch } = useHistory();
	const video = getDataFromId([{ _id: videoId }], videosData)[0];
	const { likedState } = useLiked();
	useEffect(() => {
		if (!pauseHistory && authState.token?.length) {
			if (presentObjInArray(historyState.itemsInHistory, videoId)) {
				removeFromHistoryHandler(videoId, historyDispatch);
				addToHistoryHandler(videoId, historyDispatch);
			} else {
				addToHistoryHandler(videoId, historyDispatch);
			}
		}
	}, []);

	const similarVideos = videosData.reduce(
		(prevVideo, currVideo) =>
			currVideo._id !== videoId
				? currVideo.category.filter((item) =>
						presentInArray(video.category, item)
				  ).length
					? [...prevVideo, { ...currVideo }]
					: [...prevVideo]
				: [...prevVideo],
		[]
	);

	return (
		<main className="main">
			<div className="flex-row flex-gap-half single-page">
				<div className="flex-column flex-grow-1">
					<div className="flex-row justify-content-start align-start">
						<iframe
							className="video-iframe mx-5"
							src={video.videoIframe}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<h3 className="text-bold py-5 my-5">{video.title}</h3>
					<div className="flex-row justify-content-space-between">
						<div className="flex-column justify-content-center">
							<div className="flex-row justify-content-start align-center">
								<div>
									<img
										src={video.channelProfileURL}
										alt={video.channelName}
										title={video.channelName}
										className="avatar b-radius-circle l my-5"
										aria-label="Channel profile picture"
									/>
								</div>
								<div className="card-content p-5 pb-0">
									<p className="text-bold h4">
										{video.channelName}{" "}
										{video.verified && (
											<i className="fa-solid fa-circle-check mx-2 text-cta-color"></i>
										)}
									</p>
									<p className="text-disabled py-2 h5">
										{getCountValue(video.channelSubscribers)} subscribers
									</p>
								</div>
							</div>
							<div>
								<p className="my-3">{video.description}</p>
							</div>
						</div>
						<div className="flex-row justify-content-center align-center">
							{authState.token.length ? (
								presentObjInArray(likedState.itemsInLiked, videoId) ? (
									<LikeButton btnType="remove" videoId={videoId} />
								) : (
									<LikeButton btnType="add" videoId={videoId} />
								)
							) : (
								<LikeButton btnType="redirect" videoId={videoId} />
							)}
						</div>
					</div>
				</div>
				<div className="flex-row flex-gap-1">
					<ul>
						<li className="no-list form-heading text-bold py-5 px-5">
							Related Videos
						</li>
						{similarVideos.map((item) => (
							<SimilarVideosCards videoData={item} />
						))}
					</ul>
				</div>
			</div>
		</main>
	);
};
export { VideoDetails };
