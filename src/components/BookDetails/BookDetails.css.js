import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
	display: flex;
	width: 60%;
	height: 80%;
	align-items: center;
	justify-content: center;
`;

export const BookImage = styled.div`
	width: 40%;
	height: 100%;
	background-image: ${(props) => `url(${props.bgImg})`};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;
export const BookDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 60%;
	height: 100%;
	background-color: #ccc;
`;
export const BookTitle = styled.div`
	width: 80%;
	height: 10%;
	background-color: white;
	border-radius: 30px;
`;
export const BookAuthor = styled.div`
	width: 80%;
	height: 10%;
	background-color: white;
	border-radius: 30px;
`;
export const BookDescription = styled.div`
	width: 80%;
	padding: 10px;
	background-color: white;
	border-radius: 30px;
`;
export const BookPublisher = styled.div`
	width: 80%;
	height: 10%;
	background-color: white;
	border-radius: 30px;
`;
