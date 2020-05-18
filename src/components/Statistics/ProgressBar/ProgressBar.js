import * as React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressContainer } from "./ProgressBar.css";

const ProgressBar = ({ percentageOfGoal }) => {
	return (
		<ProgressContainer>
			<CircularProgressbar
				value={isNaN(percentageOfGoal) ? 0 : percentageOfGoal}
				text={`${isNaN(percentageOfGoal) ? 0 : percentageOfGoal}%`}
			/>
		</ProgressContainer>
	);
};

export default ProgressBar;
