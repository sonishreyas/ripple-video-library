import {Header, Footer, Main, NavBar} from "./";
const Explore = () => {
    return (
        <div className="grid-container">
            <Header />
            <Main />
            <NavBar explore={true}/>
            <Footer />
        </div>
    )
}

export { Explore };