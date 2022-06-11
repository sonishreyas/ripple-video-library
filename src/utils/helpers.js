/**
 * Removed element from array
 * @param {Array} arr Array from which we need to remove an element
 * @param {any} element Element that needs to be removed from arr
 * @returns Array with element removed
 */
const removeFromArray = (arr, element) =>
	arr.filter((item) => item._id !== element);

/**
 * Removed element from array
 * @param {Array} arr Array from which we need to remove an element
 * @param {any} element Element that needs to be removed from arr
 * @returns Array with element removed
 */
const removeObjFromArray = (arr, element) =>
	arr.filter((item) => item.addressId !== element);

/**
 * Check if its present in the array
 * @param {Array} arr
 * @param {any} element Element that needs to be searched from arr
 * @returns true if element is found else false
 */
const presentInWatchLater = (arr, element) =>
	arr?.find((item) => item._id === element) !== undefined ? true : false;

/**
 * Check if its present in the array
 * @param {Array} arr
 * @param {any} element Element that needs to be searched from arr
 * @returns true if element is found else false
 */
const presentInArray = (arr, element) =>
	arr?.find((item) => item === element) !== undefined ? true : false;

/**
 * Check if its present in the array
 * @param {Array} arr
 * @param {any} element Element that needs to be searched from arr
 * @returns true if element is found else false
 */
const checkIdPresentInArray = (arr, element) =>
	arr?.find((item) => item._id === element) !== undefined ? true : false;

/**
 * Check if id is present in the array of objects
 * @param {Array} arr Array of objects
 * @param {any} element Element id that needs to be searched from arr
 * @returns true if element is found else false
 */
const presentObjInArray = (arr, element) =>
	arr.find((item) => item._id === element) !== undefined ? true : false;

/**
 * Check if id is present in the array of objects
 * @param {Array} arr Array of objects
 * @param {any} element Element id that needs to be searched from arr
 * @returns true if element is found else false
 */
const updateObjInArray = (arr, element) =>
	arr.reduce(
		(prev, curr) =>
			curr._id === element._id
				? [...prev, { ...curr, qty: curr.qty + element.qtyUpdate }]
				: [...prev, { ...curr }],
		[]
	);

/**
 *
 * @param {Array} items Array of items
 * @param {Array} data Array of data
 * @returns Return data for all elements in items array
 */
const getDataFromId = (items, data) =>
	items.map(({ _id, updatedAt }) => ({
		...data.find((item) => item._id === _id),
		updatedAt,
	}));

/**
 *
 * @param {Array} arr Array of data
 * @param {string} element
 * @returns Array with element data
 */
const getDataFromPlaylist = (arr, element) =>
	arr.reduce(
		(prev, curr) => (curr._id === element ? { ...prev, ...curr } : { ...prev }),
		{}
	);

/**
 *
 * @param {Array} items array of videoIds
 * @param {Array} data array of video data
 * @returns Array of video data included in playlist
 */
const getVideosFromPlaylist = (items, data) =>
	items.map(({ _id }) => ({
		...data.find((item) => item._id === _id),
	}));

/**
 * Handle long counts
 * @param {number} value Value to scale
 * @returns calculated count
 */
const getCountValue = (value) =>
	value > 1000
		? value > 1000000
			? value / 1000000 + "M"
			: value / 1000 + "K"
		: value;

/**
 * Handle long strings
 * @param {string} data Value to trim
 * @returns trimmed string
 */
const trimData = (data) =>
	(data.length < 40 ? data : data.substr(0, 38)) + "..";

export {
	removeFromArray,
	presentInWatchLater,
	presentInArray,
	presentObjInArray,
	removeObjFromArray,
	updateObjInArray,
	getDataFromId,
	checkIdPresentInArray,
	getDataFromPlaylist,
	getVideosFromPlaylist,
	getCountValue,
	trimData,
};
