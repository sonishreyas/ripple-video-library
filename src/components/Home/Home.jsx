import { Header, Footer, Main, NavBar } from ".";
const Home = () => {
	return (
		<div className="grid-container">
			<Header />
			<Main />
			<NavBar home={true} />
			<Footer />
		</div>
	);
};

export { Home };
