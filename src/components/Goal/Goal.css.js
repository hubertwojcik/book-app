import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	min-height: 600px;
`;
export const Title = styled.div`
	font-size: 32px;
	width: 100%;
	text-align: center;
	border-bottom: 1px solid gold;
	padding: 30px;
	font-weight: bold;
`;
export const GoalContent = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
	flex: 1;
	width: 100%;
	margin-bottom: 20px;
`;

export const GoalTitle = styled.h3`
	color: black;
`;

export const GoalValue = styled.div`
	width: 50px;
	margin-left: 30px;
	border: 1px solid black;
	padding: 10px 40px;
	border-radius: 5px;
	background-color: #ddd;
`;

export const GoalContainer = styled.div`
	display: flex;
	align-items: center;
	color: black;
	width: 50%;
	height: 50px;
	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 10px;
		border-radius: 15px;
		background: #67e7ec;
		outline: none;
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			width: 25px;
			height: 25px;
			border-radius: 50px;
			background: #045bf5;
		}
		&::-moz-range-thumb {
			width: 25px;
			height: 25px;
			border-radius: 50px;
			background: #045bf5;
		}
	}
`;
