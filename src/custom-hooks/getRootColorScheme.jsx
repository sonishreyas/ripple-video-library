import { useState, useEffect } from "react";
const useDefineRootColorScheme = () => {
	const [themeIcon, setThemeIcon] = useState(
		localStorage.getItem("theme")
			? localStorage.getItem("theme") === "dark"
				? "sun"
				: "moon"
			: window.matchMedia("(prefers-color-scheme): light").matches
			? "moon"
			: "sun"
	);
	const [theme, setTheme] = useState(
		localStorage.getItem("theme")
			? localStorage.getItem("theme")
			: window.matchMedia("(prefers-color-scheme): light").matches
			? "light"
			: "dark"
	);
	const handleSetTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			setThemeIcon("moon");
		} else {
			setTheme("dark");
			setThemeIcon("sun");
		}
	};
	useEffect(() => {
		document.querySelector(":root").setAttribute("color-scheme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	return { theme, themeIcon, handleSetTheme };
};

export { useDefineRootColorScheme };
