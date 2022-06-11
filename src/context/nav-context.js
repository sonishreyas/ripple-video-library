import { createContext, useContext, useEffect, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		if (window.innerWidth <= 768) setShowNavbar(false);
		else setShowNavbar(true);
	}, []);

	return (
		<NavContext.Provider
			value={{
				showNavbar,
				setShowNavbar,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};

const useNav = () => useContext(NavContext);

export { useNav, NavProvider };
