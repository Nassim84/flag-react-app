// NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Eroor.css";
import error404 from "../assets/img/404.png";

const NotFoundPage = () => {
	return (
		<div className="not-found-container">
			<img src={error404} alt="" />
			<p>Oups! La page que vous cherchez n'existe pas 🕵️‍♂️.</p>
			<Link to="/" className="home-link">
				Retour à l'accueil 🏠
			</Link>
		</div>
	);
};

export default NotFoundPage;
