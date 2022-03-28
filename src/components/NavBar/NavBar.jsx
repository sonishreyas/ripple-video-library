
import {Link} from "react-router-dom";
import {useAuth} from "../../context"
const NavBar = (props) => {

    const {authState} = useAuth();
    return (
        <nav className="nav nav-shadow navbar-rp">
            <ul className="rui-drawer-content--list no-list">
                <li
                    className="flex-row justify-content-space-between align-center rui-drawer-content rui-drawer-header display-inactive">
                    <section>
                        <img src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
                            alt="Logo of ripple play" className="brand-logo" />
                        <sub className="brand-name">Ripple Play</sub>
                    </section>
                    <section>
                        <i className="fas fa-angle-left close-drawer"></i>
                    </section>
                </li>
                <li className="rui-drawer-content m-10">
                    <Link to={"/"} className="rui-drawer-links">
                        <section className={`navbar-rp-section ${ props.home ? "text-cta-color": ""}`}>
                            <span><i className="fa-solid fa-house-chimney"></i></span>
                            <span className="rui-drawer-content--text p-2 text-center">Home</span>
                        </section>
                    </Link>
                </li>
                <li className="rui-drawer-content m-10">
                    <Link to={"/explore"} className="rui-drawer-links">
                        <section className={`navbar-rp-section ${ props.explore ? "text-cta-color": ""}`}>
                            <span><i className="fa-solid fa-compass"></i></span>
                            <span className="rui-drawer-content--text p-2 text-center">Explore</span>
                        </section>
                    </Link>
                </li>
                <li className="rui-drawer-content m-10">
                    { 
                    authState.token !== null ?
                        <Link to={"/watchlater"} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.watchlater ? "text-cta-color": ""}`}>
                                <span><i className="fa-solid fa-clock"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Watch Later</span>
                            </section>
                        </Link>
                            :
                        <Link to={"/auth"} state={{state:'/watchlater'}} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.watchlater ? "text-cta-color": ""}`}>
                                <span><i className="fa-solid fa-clock"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Watch Later</span>
                            </section>
                        </Link>
                    }      
                </li>
                <li className="rui-drawer-content m-10">
                    { 
                    authState.token !== null ?
                        <Link to={"/liked"} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.liked ? "text-cta-color": ""}`}>
                                <span><i className="fa-solid fa-thumbs-up"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Liked</span>
                            </section>
                        </Link>
                            :
                        <Link to={"/auth"} state={{state:'/liked'}} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.liked ? "text-cta-color": ""}`}>
                                <span><i className="fa-solid fa-thumbs-up"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Liked</span>
                            </section>
                        </Link>
                    }      
                </li>
                <li className="rui-drawer-content m-10">
                    { 
                    authState.token !== null ?
                        <Link to={"/playlist"} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.playlist ? "text-cta-color": ""}`}>
                                <span><i className="fas fa-folder-plus"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Playlist</span>
                            </section>
                        </Link>
                            :
                        <Link to={"/auth"} state={{state:'/playlist'}} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.playlist ? "text-cta-color": ""}`}>
                                <span><i className="fas fa-folder-plus"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Playlist</span>
                            </section>
                        </Link>
                    }      
                </li>
                <li className="rui-drawer-content m-10">
                    { 
                    authState.token !== null ?
                        <Link to={"/history"} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.history ? "text-cta-color": ""}`}>
                                <span><i className="fa-solid fa-clock-rotate-left"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Watch History</span>
                            </section>
                        </Link>
                            :
                        <Link to={"/auth"} state={{state:'/history'}} className="rui-drawer-links">
                            <section className={`navbar-rp-section ${ props.history ? "text-cta-color": ""}`}>
                                <span><i className="fa-solid fa-clock-rotate-left"></i></span>
                                <span className="rui-drawer-content--text p-2 text-center">Watch History</span>
                            </section>
                        </Link>
                    }      
                </li>
                
            </ul>
        </nav>
    );
}

export { NavBar };