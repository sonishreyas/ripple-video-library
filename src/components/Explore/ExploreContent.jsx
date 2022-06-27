import { VideoCard, Filters } from "./";

const ExploreContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start w-100">
			<Filters />
			<VideoCard />
		</main>
	);
};

export { ExploreContent };
