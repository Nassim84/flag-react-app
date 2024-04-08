// Contact.js
import React from "react";
import "../css/Contact.css";

const Contact = () => {
	return (
		<div className="contact-container">
			<h1>Contactez-Nous</h1>
			<form className="contact-form">
				<input type="text" placeholder="Nom" className="input-field" />
				<input type="email" placeholder="Email" className="input-field" />
				<textarea
					placeholder="Votre Message"
					className="textarea-field"
				></textarea>
				<button type="submit" className="submit-btn">
					Envoyer
				</button>
			</form>
		</div>
	);
};

export default Contact;
