const VideoHorizontalCard = ({ itemCount, videos, handleDelete }) => {
	return (
		<div className="flex-column align-center">
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
						<li key={_id} className="no-list">
							<article className="cursor-pointer card horizontal card-shadow p-5 b-radius-2 w-100 h-auto list-card mx-7">
								<div className="flex-row p-1 b-radius-2 ">
									<div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
										<img
											src={thumbnailURL}
											alt={title}
											title={title}
											className="horizontal-card-img b-radius-2"
										/>
									</div>
									<div className="flex-row justify-content-space-between align-center">
										<div className="horizontal-card-text--container flex-column flex-gap-1 p-2 b-radius-2 my-0 mx-5">
											<h3 className="text-bold">{title}</h3>
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
											className="fa-solid fa-trash"
											onClick={(e) => handleDelete(e, _id)}
										></i>
									</div>
								</div>
							</article>
						</li>
					)
				)
			) : (
				<h3> No Videos Added</h3>
			)}
		</div>
	);
};

export { VideoHorizontalCard };
