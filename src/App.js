import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/AnimatedPage";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Countries from "./pages/Countries";
import About from "./pages/About";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<AnimatedPage>
							<Countries />
						</AnimatedPage>
					}
				/>
				<Route
					path="/contact"
					element={
						<AnimatedPage>
							<Contact />
						</AnimatedPage>
					}
				/>
				<Route
					path="/about"
					element={
						<AnimatedPage>
							<About />
						</AnimatedPage>
					}
				/>
				<Route
					path="*"
					element={
						<AnimatedPage>
							<Error />
						</AnimatedPage>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
}

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<AnimatedRoutes />
			</Router>
		</>
	);
}

export default App;
