import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";
const NavBar = () => {
	const { authState } = useAuth();
	const getActiveClass = ({ isActive }) =>
		isActive
			? "text-cta-color rui-drawer-links navbar-rp-section"
			: "rui-drawer-links navbar-rp-section";
	return (
		<nav className="nav nav-shadow navbar-rp">
			<ul className="rui-drawer-content--list no-list">
				<li className="flex-row justify-content-space-between align-center rui-drawer-content rui-drawer-header display-inactive">
					<section>
						<img
							src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
							alt="Logo of ripple play"
							className="brand-logo"
						/>
						<sub className="brand-name">Ripple Play</sub>
					</section>
					<section>
						<i className="fas fa-angle-left close-drawer"></i>
					</section>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink to={"/"} className={getActiveClass}>
						<span>
							<i className="fa-solid fa-house-chimney"></i>
						</span>
						<span className="rui-drawer-content--text p-2 text-center">
							Home
						</span>
					</NavLink>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink to={"/explore"} className={getActiveClass}>
						<span>
							<i className="fa-solid fa-compass"></i>
						</span>
						<span className="rui-drawer-content--text p-2 text-center">
							Explore
						</span>
					</NavLink>
				</li>
				<li className="rui-drawer-content m-10">
					{authState.token.length ? (
						<NavLink to={"/watchlater"} className={getActiveClass}>
							<span>
								<i className="fa-solid fa-clock"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Watch Later
							</span>
						</NavLink>
					) : (
						<NavLink
							to={"/auth"}
							state={{ state: "/watchlater" }}
							className={getActiveClass}
						>
							<span>
								<i className="fa-solid fa-clock"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Watch Later
							</span>
						</NavLink>
					)}
				</li>
				<li className="rui-drawer-content m-10">
					{authState.token.length ? (
						<NavLink to={"/liked"} className={getActiveClass}>
							<span>
								<i className="fa-solid fa-thumbs-up"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Liked
							</span>
						</NavLink>
					) : (
						<NavLink
							to={"/auth"}
							state={{ state: "/liked" }}
							className={getActiveClass}
						>
							<span>
								<i className="fa-solid fa-thumbs-up"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Liked
							</span>
						</NavLink>
					)}
				</li>
				<li className="rui-drawer-content m-10">
					{authState.token.length ? (
						<NavLink to={"/playlist"} className={getActiveClass}>
							<span>
								<i className="fas fa-folder-plus"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Playlist
							</span>
						</NavLink>
					) : (
						<NavLink
							to={"/auth"}
							state={{ state: "/playlist" }}
							className={getActiveClass}
						>
							<span>
								<i className="fas fa-folder-plus"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Playlist
							</span>
						</NavLink>
					)}
				</li>
				<li className="rui-drawer-content m-10">
					{authState.token.length ? (
						<NavLink to={"/history"} className={getActiveClass}>
							<span>
								<i className="fa-solid fa-clock-rotate-left"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Watch History
							</span>
						</NavLink>
					) : (
						<NavLink
							to={"/auth"}
							state={{ state: "/history" }}
							className={getActiveClass}
						>
							<span>
								<i className="fa-solid fa-clock-rotate-left"></i>
							</span>
							<span className="rui-drawer-content--text p-2 text-center">
								Watch History
							</span>
						</NavLink>
					)}
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
