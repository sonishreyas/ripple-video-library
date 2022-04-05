/**
 * Removed element from array
 * @param {Array} arr Array from which we need to remove an element
 * @param {any} element Element that needs to be removed from arr
 * @returns Array with element removed
 */
const removeFromArray = (arr, element) =>
	arr.filter((item) => item.videoId !== element);

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
 * Check if id is present in the array of objects and update the Address
 * @param {Array} arr Array of objects
 * @param {any} element Element id that needs to be searched from arr
 * @returns true if element is found else false
 */
const updateAddressObjInArray = (arr, element) =>
	arr.reduce(
		(prev, curr) =>
			curr.addressId === element.addressId
				? [...prev, { ...element }]
				: [...prev, { ...curr }],
		[]
	);

const getDataFromId = (items, data) =>
	items.map(({ videoId, updatedAt }) => ({
		...data.find((item) => item._id === videoId),
		updatedAt,
	}));

const getDataFromPlaylist = (arr, element) =>
	arr.reduce(
		(prev, curr) => (curr._id === element ? { ...prev, ...curr } : { ...prev }),
		{}
	);

const getVideosFromPlaylist = (items, data) =>
	items.map(({ _id }) => ({
		...data.find((item) => item._id === _id),
	}));

export {
	removeFromArray,
	presentInArray,
	presentObjInArray,
	removeObjFromArray,
	updateObjInArray,
	updateAddressObjInArray,
	getDataFromId,
	checkIdPresentInArray,
	getDataFromPlaylist,
	getVideosFromPlaylist,
};
