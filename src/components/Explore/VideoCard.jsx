import { useVideos } from "../../context";
import { Link } from "react-router-dom";
import { getCountValue } from "../../utils";
const VideoCard = () => {
	const { videosData } = useVideos();
	return (
		<div className="products-container flex-row align-center flex-gap-2 flex-wrap">
			{videosData.length !== 0 ? (
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
									<h3 className="card-title text-wrap">{title}</h3>
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
								<button className="cursor-pointer primary-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1">
									<span className="wishlist-icon">
										<i className="fas fa-folder-plus social"></i>
									</span>
									<p>Add to Playlist</p>
								</button>
								<button className="cursor-pointer outline-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1">
									<span className="wishlist-icon">
										<i className="fa-solid fa-clock social"></i>
									</span>
									<p>Watch later</p>
								</button>
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
