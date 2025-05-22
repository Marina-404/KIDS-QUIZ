import "./App.css";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<section>
				<Header />
				<main className="min-h-screen">
					<Outlet />
				</main>
				<Footer />
			</section>
		</>
	);
}

export default App;
