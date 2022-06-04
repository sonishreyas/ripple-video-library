import { v4 as uuid } from "uuid";

export const navData = [
	{
		id: uuid(),
		route: "/",
		name: "Home",
		icon: "fa-solid fa-house-chimney",
	},
	{
		id: uuid(),
		route: "/watchlater",
		name: "Watch Later",
		icon: "fa-solid fa-clock",
	},
	{
		id: uuid(),
		route: "/liked",
		name: "Liked",
		icon: "fa-solid fa-thumbs-up",
	},
	{
		id: uuid(),
		route: "/playlist",
		name: "Playlist",
		icon: "fas fa-folder-plus",
	},
	{
		id: uuid(),
		route: "/history",
		name: "Watch History",
		icon: "fa-solid fa-clock-rotate-left",
	},
];
