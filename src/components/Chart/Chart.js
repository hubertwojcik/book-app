import * as React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";

const Chart = () => {
	const pagesPerBook = useSelector((state) => state.books.numOfPagesOfBooks);
	const titlesOfBooks = useSelector((state) => state.books.titleOfBooks);

	const [chartData, setChartData] = React.useState({});

	const PieChart = () => {
		setChartData({
			labels: [...titlesOfBooks],
			datasets: [
				{
					data: [...pagesPerBook],
				},
			],
		});
	};

	React.useEffect(() => {
		PieChart();
	}, []);

	return (
		<div>
			<Pie data={chartData} />
		</div>
	);
};

export default Chart;
