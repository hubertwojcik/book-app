import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 80px;
`;
export const NavigationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-decoration: none;
`;
export const List = styled.ul`
	display: flex;
	color: white;
	justify-content: space-around;
	width: 50%;
	text-decoration: none;
	& > a {
		color: white;
		text-decoration: none;
		font-size: 22px;
		transition: all 0.5s;
		transform: scale(1);
		&:hover {
			color: red;
			transform: scale(1.3);
			border-bottom: 1px solid black;
		}
	}
`;
