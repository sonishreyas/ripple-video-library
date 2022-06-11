import { removeFromArray } from "../utils";
/**
 * Reducer function to handle comments state
 * @param {Object} commentsState State values of comments
 * @param {*} commentsAction The changed state
 * @returns Updated state into commentsState
 */
const commentsReducer = (commentsState, { type, payload }) => {
	switch (type) {
		case "ADD_COMMENT":
			return {
				...commentsState,
				comments: [...commentsState.comments, { ...payload.itemsIncomments }],
			};
		case "REMOVE_ITEM":
			return {
				...commentsState,
				commentsItemsCount: payload.commentsItemsCount,
				itemsIncomments: removeFromArray(
					commentsState.itemsIncomments,
					payload.itemsIncomments
				),
			};
		case "REMOVE_ALL":
			return {
				...commentsState,
				commentsItemsCount: payload.commentsItemsCount,
				itemsIncomments: [],
			};
		case "RESET":
			return {
				...commentsState,
				commentsItemsCount: 0,
				itemsIncomments: [],
			};
		default:
			return commentsState;
	}
};

export { commentsReducer };
