import * as React from "react";
import {
	Container,
	Title,
	GoalContent,
	GoalContainer,
	GoalTitle,
	GoalValue,
} from "./Goal.css";
import { Button } from "../BookForm/BookForm.css";

const Goal = () => {
	const [readGoal, setReadGoal] = React.useState(0);

	const handleOnChange = (e) => setReadGoal(e.target.value);
	return (
		<Container>
			<Title>Set your goal!</Title>
			<GoalContent>
				<GoalTitle>Set number of books You'd like to read this year</GoalTitle>
				<GoalContainer>
					<input
						type="range"
						min={0}
						max={200}
						value={readGoal}
						onChange={handleOnChange}
						className="slider"
					/>
					<GoalValue>{readGoal}</GoalValue>
				</GoalContainer>
				<Button>Set Goal!</Button>
			</GoalContent>
		</Container>
	);
};

export default Goal;
