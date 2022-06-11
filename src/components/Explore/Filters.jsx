import { useVideos } from "context";

const Filters = () => {
	const { categoriesData, videosState, videosDispatch, clearFilters } =
		useVideos();

	const categoryFilterHandler = (e, name) =>
		videosDispatch({
			type: "FILTER_CATEGORY",
			payload: {
				categoryName: name,
				categoryFilters: ((categoryFilters, e) => {
					const newCategoryFilters = { ...categoryFilters };
					newCategoryFilters[name] = e.target.checked;
					return newCategoryFilters;
				})(videosState.categoryFilters, e),
			},
		});
	const checkResetCatergoryFilters = () =>
		Object.keys(videosState.categoryFilters).filter(
			(item) => videosState.categoryFilters[item]
		).length > 0
			? false
			: true;

	const resetFilters = () => videosDispatch({ ...clearFilters });
	return (
		<div className="flex-row flex-wrap flex-gap-1 w-100 my-8">
			{categoriesData.length !== 0 && Object.keys(videosState).length !== 0 && (
				<label
					className={`basic-chip flex-row align-center flex-wrap flex-gap-1 video-filters ${
						checkResetCatergoryFilters() ? "filter-chip-selected" : ""
					}`}
					key="ALL"
				>
					<input
						className="filters"
						type="checkbox"
						value="FILTER_CATEGORY"
						checked={checkResetCatergoryFilters() ? true : false}
						onChange={resetFilters}
					/>
					<i className="fa-solid fa-circle-check"></i>
					<p className="basic-chip-content">All</p>
				</label>
			)}
			{categoriesData.length !== 0 &&
				Object.keys(videosState).length !== 0 &&
				categoriesData.map(({ _id, categoryName }) => (
					<label
						className={`basic-chip flex-row align-center flex-wrap flex-gap-1 video-filters ${
							videosState.categoryFilters[categoryName]
								? "filter-chip-selected"
								: ""
						}`}
						key={_id}
					>
						<input
							className="filters"
							type="checkbox"
							value="FILTER_CATEGORY"
							checked={videosState.categoryFilters[categoryName] ? true : false}
							onChange={(e) => categoryFilterHandler(e, categoryName)}
						/>
						<i className="fa-solid fa-circle-check"></i>
						<p className="basic-chip-content">{categoryName}</p>
					</label>
				))}
		</div>
	);
};

export { Filters };
