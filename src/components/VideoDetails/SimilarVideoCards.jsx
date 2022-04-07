const SimilarVideosCards = ({ videoData }) => {
	const {
		_id,
		title,
		channelName,
		verified,
		views,
		likes,
		channelProfileURL,
		thumbnailURL,
	} = videoData;
	return (
		<li key={_id} className="no-list mx-5">
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
					<div className="flex-row align-center">
						<div className="horizontal-card-text--container flex-column p-2 b-radius-2 my-0 mx-5">
							<h4 className="text-bold">{title}</h4>
							<section className="flex-row justify-content-start align-start">
								<section className="card-content pb-0">
									<p className="card-category py-5">
										{channelName}{" "}
										{verified && (
											<i className="fa-solid fa-circle-check mx-2 text-cta-color"></i>
										)}
									</p>
								</section>
							</section>
						</div>
					</div>
				</div>
			</article>
		</li>
	);
};

export { SimilarVideosCards };
