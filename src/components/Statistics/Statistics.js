import React from "react";
import { useSelector } from "react-redux";
import Chart from "../Chart/Chart";

const Statistics = () => {
	const totalNumberOfPages = useSelector((state) => state.books.totalPages);
	const NumberOfDaysToFinish = useSelector(
		(state) => state.books.books.daysToFinish
	);

	return (
		<>
			<div> Total number of Pages : {totalNumberOfPages}</div>
			<Chart />
		</>
	);
};

export default Statistics;
