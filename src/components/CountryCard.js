import React from "react";

const CountryCard = ({ country }) => {
	return (
		<div className="country-card">
			<img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
			<div className="country-info">
				<h2>{country.name.common}</h2>
				<p>
					<strong>Population:</strong> {country.population.toLocaleString()}
				</p>
				<p>
					<strong>Capital:</strong> {country.capital?.[0] || "N/A"}
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
