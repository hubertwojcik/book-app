import React from "react";
import { useSelector } from "react-redux";
import Chart from "../Chart/Chart";
import {
	StatsHeader,
	StatsContainer,
	ProgressContainer,
	Container,
} from "./Statistics.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const Statistics = () => {
	const totalNumberOfPages = useSelector((state) => state.books.totalPages);
	const numberOfBooks = useSelector(
		(state) => state.books.finishedBooks.length
	);
	console.log(numberOfBooks);
	const setGoal = useSelector((state) => state.goal.booksGoal);

	const [percentages, setPercentages] = React.useState(0);

	React.useEffect(() => {
		setPercentages(((numberOfBooks / setGoal) * 100).toFixed(1));
	}, [numberOfBooks, setGoal]);

	return (
		<>
			<Container>
				<StatsHeader>Total number of Pages : {totalNumberOfPages}</StatsHeader>
				<StatsContainer>
					<ProgressContainer>
						<h2>Your current goal progress</h2>
						<ProgressBar percentageOfGoal={percentages} />
					</ProgressContainer>
					<div>q</div>
				</StatsContainer>
			</Container>
		</>
	);
};

export default Statistics;
