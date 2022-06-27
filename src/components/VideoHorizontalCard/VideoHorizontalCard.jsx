import { Link } from "react-router-dom";
import { trimData } from "utils";

const VideoHorizontalCard = ({ itemCount, videos, handleDelete }) => {
	return (
		<div className="flex-column align-start justify-content-start flex-gap-2">
			{itemCount ? (
				videos.map(
					({
						_id,
						title,
						channelName,
						verified,
						duration,
						description,
						thumbnailURL,
						channelProfileURL,
					}) => (
						<article
							className="cursor-pointer card flex-row justify-content-start align-start flex-wrap card-shadow p-5 b-radius-2 w-100 h-auto list-card"
							key={_id}
						>
							<div className="flex-row p-1 b-radius-2 ">
								<Link
									to={`/videos/${_id}`}
									className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2"
								>
									<img
										src={thumbnailURL}
										alt={title}
										title={title}
										className="horizontal-card-img b-radius-2"
									/>
								</Link>
								<div className="flex-column justify-content-start align-start w-100">
									<div className="horizontal-card-text--container p-2 b-radius-2 my-0 mx-5">
										<h4 className="text-bold">{trimData(title)}</h4>
										<section className="flex-row justify-content-start align-start">
											<section>
												<img
													src={channelProfileURL}
													alt={channelName}
													title={channelName}
													className="avatar b-radius-circle m my-5"
													aria-label="Channel profile picture"
												/>
											</section>
											<section className="card-content p-5 pb-0">
												<p className="card-category py-5">
													{channelName}{" "}
													{verified && (
														<i className="fa-solid fa-circle-check mx-2 text-cta-color"></i>
													)}
												</p>
											</section>
										</section>
									</div>
									<i
										className="fa-solid fa-trash delete-icon"
										onClick={(e) => handleDelete(e, _id)}
									></i>
								</div>
							</div>
						</article>
					)
				)
			) : (
				<h3> No Videos Added</h3>
			)}
		</div>
	);
};

export { VideoHorizontalCard };
