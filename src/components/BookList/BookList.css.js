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
`;
export const ListContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
	flex: 1;
	width: 100%;
	margin-bottom: 20px;
`;
