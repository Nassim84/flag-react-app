import React from "react";

const Filter = ({ onFilterChange, onSortChange }) => {
	return (
		<div className="filter-container">
			<div className="filter-item">
				<label htmlFor="search">Search:</label>
				<input
					type="text"
					id="search"
					onChange={(e) => onFilterChange(e.target.value)}
				/>
			</div>
			<div className="filter-item">
				<label htmlFor="sort">Sort by population:</label>
				<select id="sort" onChange={(e) => onSortChange(e.target.value)}>
					<option value="">Select</option>
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
		</div>
	);
};

export default Filter;
