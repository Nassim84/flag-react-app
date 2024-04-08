import React, { useEffect, useState } from "react";
import "../css/App.css";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

function Country() {
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [countriesPerPage] = useState(12);
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOrder, setSortOrder] = useState("");

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await fetch("https://restcountries.com/v3.1/all");
			const data = await response.json();
			setCountries(data);
			setFilteredCountries(data);
		};

		fetchCountries();
	}, []);

	useEffect(() => {
		let filteredData = [...countries];

		if (searchTerm) {
			filteredData = filteredData.filter((country) =>
				country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (sortOrder === "asc") {
			filteredData.sort((a, b) => a.population - b.population);
		} else if (sortOrder === "desc") {
			filteredData.sort((a, b) => b.population - a.population);
		}

		setFilteredCountries(filteredData);
		setCurrentPage(1);
	}, [searchTerm, sortOrder, countries]);

	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = filteredCountries.slice(
		indexOfFirstCountry,
		indexOfLastCountry
	);

	const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleFilterChange = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	const handleSortChange = (sortOrder) => {
		setSortOrder(sortOrder);
	};

	return (
		<div className="App">
			<Filter
				onFilterChange={handleFilterChange}
				onSortChange={handleSortChange}
			/>
			<div className="countries-container">
				{currentCountries.map((country) => (
					<CountryCard key={country.cca3} country={country} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default Country;
