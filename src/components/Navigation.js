import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function Navigation() {
	return (
		<div className="navigation">
			<Link to="/" className="nav-link">
				Page d'accueil
			</Link>
			<Link to="/contact" className="nav-link">
				Page de contact
			</Link>
			<Link to="/about" className="nav-link">
				A propos de nous
			</Link>
		</div>
	);
}

export default Navigation;
