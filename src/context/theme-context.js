import { createContext, useContext } from "react";
import { useDefineRootColorScheme } from "../custom-hooks";

const defaultThemeContextValues = {
	theme: localStorage.getItem("theme")
		? localStorage.getItem("theme")
		: window.matchMedia("(prefers-color-scheme): light").matches
		? "light"
		: "dark",
	themeIcon: localStorage.getItem("theme")
		? localStorage.getItem("theme") === "dark"
			? "sun"
			: "moon"
		: window.matchMedia("(prefers-color-scheme): light").matches
		? "moon"
		: "sun",
};

const ThemeContext = createContext({ defaultThemeContextValues });

const ThemeProvider = ({ children }) => {
	const { theme, themeIcon, handleSetTheme } = useDefineRootColorScheme();

	return (
		<ThemeContext.Provider value={{ theme, themeIcon, handleSetTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
