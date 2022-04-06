import { removeFromArray } from "../utils";
/**
 * Reducer function to handle liked state
 * @param {Object} likedState State values of liked
 * @param {*} likedAction The changed state
 * @returns Updated state into likedState
 */
const likedReducer = (likedState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...likedState,
				likedItemsCount: payload.likedItemsCount,
				itemsInLiked: [...likedState.itemsInLiked, { ...payload.itemsInLiked }],
			};

		case "REMOVE_ITEM":
			return {
				...likedState,
				likedItemsCount: payload.likedItemsCount,
				itemsInLiked: removeFromArray(
					likedState.itemsInLiked,
					payload.itemsInLiked
				),
			};

		default:
			return likedState;
	}
};

export { likedReducer };
