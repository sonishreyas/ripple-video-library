const LoadingCards = ({ noOfCards }) => {
	return (
		<>
			{Array.from({ length: noOfCards }).map((item, index) => (
				<article
					className="cursor-pointer card video-card card-shadow b-radius-2 p-5"
					key={index}
				>
					<section className="video-card-image-container card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2 video-card-image-loader" />
					<section className="flex-row justify-content-start align-start mx-5 ">
						<section className="avatar b-radius-circle l my-5 video-card-profile-image-loader" />
						<section className="card-content p-5 pb-0 mx-5 w-100">
							<p className="card-title text-wrap text-bold h5 video-card-title-loader my-5" />
							<p className="card-category py-5 video-card-category-loader" />
						</section>
					</section>
				</article>
			))}
		</>
	);
};
export { LoadingCards };
