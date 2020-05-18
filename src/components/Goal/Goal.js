import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Container,
	Title,
	GoalContent,
	GoalContainer,
	GoalTitle,
	GoalValue,
} from "./Goal.css";
import { Button } from "../BookForm/BookForm.css";
import { setGoal } from "../../store/actions/goalActions";

const Goal = () => {
	const currGoal = useSelector((state) => state.goal.booksGoal);
	const dispatch = useDispatch();

	return (
		<Container>
			<Title>Set your goal!</Title>
			<GoalContent>
				<GoalTitle>Set number of books You'd like to read this year</GoalTitle>
				<GoalContainer>
					<input
						type="range"
						min={0}
						max={50}
						value={currGoal}
						onChange={(e) => dispatch(setGoal(e.target.value))}
						className="slider"
					/>
					<GoalValue>{currGoal}</GoalValue>
				</GoalContainer>
				<Button>Set Goal!</Button>
			</GoalContent>
		</Container>
	);
};

export default Goal;
