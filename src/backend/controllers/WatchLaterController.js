import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to WatchLater Videos are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's watchlater.
 * send GET Request at /api/user/watchlater
 * */
export const getWatchLaterVideosHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		return new Response(200, {}, { watchlater: user.watchlater });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler handles adding videos to user's watchlater.
 * send POST Request at /api/user/watchlater
 * body contains {video}
 * */

export const addItemToWatchLaterVideos = function (schema, request) {
	const user = requiresAuth.call(this, request);
	if (user) {
		const { videoId } = JSON.parse(request.requestBody);
		if (user.watchlater.some((item) => item._id === videoId)) {
			return new Response(
				409,
				{},
				{
					errors: ["The video is already in your WatchLater videos"],
				}
			);
		}
		user.watchlater.push({ _id: videoId, updatedAt: formatDate() });
		return new Response(201, {}, { watchlater: user.watchlater });
	}
	return new Response(
		404,
		{},
		{
			errors: ["The email you entered is not Registered. Not Found error"],
		}
	);
};

/**
 * This handler handles removing videos from user's watchlater.
 * send DELETE Request at /api/user/watchlater/:videoId
 * */

export const removeItemFromWatchLaterVideos = function (schema, request) {
	const user = requiresAuth.call(this, request);
	if (user) {
		const videoId = request.params.videoId;
		const filteredWatchlater = user.watchlater.filter(
			(item) => item._id !== videoId
		);
		this.db.users.update({ watchlater: filteredWatchlater });
		return new Response(200, {}, { watchlater: filteredWatchlater });
	}
	return new Response(
		404,
		{},
		{ errors: ["The user you request does not exist. Not Found error."] }
	);
};