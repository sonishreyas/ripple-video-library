import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Chess",
	},
	{
		_id: uuid(),
		categoryName: "Gaming",
	},
	{
		_id: uuid(),
		categoryName: "Music",
	},
	{
		_id: uuid(),
		categoryName: "Investing",
	},
	{
		_id: uuid(),
		categoryName: "Standup",
	},
];
