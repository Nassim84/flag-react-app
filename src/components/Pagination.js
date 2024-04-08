import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((pageNumber) => (
					<li
						key={pageNumber}
						className={`page-item ${
							currentPage === pageNumber ? "active" : ""
						}`}
					>
						<button
							onClick={() => onPageChange(pageNumber)}
							className="page-link"
						>
							{pageNumber}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
