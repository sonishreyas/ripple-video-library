import { removeFromArray } from "../utils";
/**
 * Reducer function to handle watchLater state
 * @param {Object} watchlaterState State values of watchLater
 * @param {*} watchlaterAction The changed state
 * @returns Updated state into watchlaterState
 */
const watchlaterReducer = (watchlaterState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...watchlaterState,
				watchlaterItemsCount: payload.watchlaterItemsCount,
				itemsInWatchlater: [
					...watchlaterState.itemsInWatchlater,
					{ ...payload.itemsInWatchlater },
				],
			};

		case "REMOVE_ITEM":
			return {
				...watchlaterState,
				watchlaterItemsCount: payload.watchlaterItemsCount,
				itemsInWatchlater: removeFromArray(
					watchlaterState.itemsInWatchlater,
					payload.itemsInWatchlater
				),
			};
		default:
			return watchlaterState;
	}
};

export { watchlaterReducer };
