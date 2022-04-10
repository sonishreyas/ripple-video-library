import { useVideos, useAuth, useWatchlater } from "../../context";
import { Link } from "react-router-dom";
import { presentInWatchLater, getCountValue, trimData } from "../../utils";
import { AddToPlaylistBtn, WatchLaterButton } from ".";

const VideoCard = () => {
	const { videosData } = useVideos();
	const { watchlaterState } = useWatchlater();
	const { authState } = useAuth();

	return (
		<div className="products-container flex-row align-center flex-gap-2 flex-wrap">
			{videosData.length ? (
				videosData.map(
					({
						_id,
						title,
						channelName,
						verified,
						views,
						likes,
						channelProfileURL,
						thumbnailURL,
					}) => (
						<article
							className="cursor-pointer card video-card card-shadow p-5 b-radius-2"
							key={_id}
						>
							<Link
								to={`/videos/${_id}`}
								className="video-card-image-container card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2"
							>
								<img
									src={thumbnailURL}
									alt={title}
									title={title}
									className="video-card-image b-radius-2"
								/>
							</Link>
							<section className="flex-row justify-content-start align-start">
								<section>
									<img
										src={channelProfileURL}
										alt={channelName}
										title={channelName}
										className="avatar b-radius-circle l my-5"
										aria-label="Channel profile picture"
									/>
								</section>
								<section className="card-content p-5 pb-0">
									<h3 className="card-title text-wrap" title={title}>
										{trimData(title)}
									</h3>
									<p className="card-category py-5">
										{channelName}{" "}
										{verified && (
											<i className="fa-solid fa-circle-check mx-2 text-cta-color"></i>
										)}
									</p>
									<span className="card-price-tag flex-row align-center flex-gap-half text-bold">
										<p className="p-0 m-0">{getCountValue(views)} views</p>
										<i className="fa-solid fa-circle"></i>
										<p className="p-0 m-0">{getCountValue(likes)} likes</p>
									</span>
								</section>
							</section>
							<section className="video-btn-container flex-row justify-content-center flex-wrap">
								{authState.token.length ? (
									<AddToPlaylistBtn btnType="add" videoId={_id} />
								) : (
									<AddToPlaylistBtn btnType="redirect" />
								)}
								{authState.token.length ? (
									presentInWatchLater(
										watchlaterState.itemsInWatchlater,
										_id
									) ? (
										<WatchLaterButton btnType="remove" videoId={_id} />
									) : (
										<WatchLaterButton btnType="add" videoId={_id} />
									)
								) : (
									<WatchLaterButton btnType="redirect" />
								)}
							</section>
						</article>
					)
				)
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export { VideoCard };
