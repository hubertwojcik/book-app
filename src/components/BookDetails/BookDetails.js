import * as React from "react";
import {
	StyledModal,
	BookImage,
	BookDetails,
	BookTitle,
	BookDescription,
	BookPublisher,
	BookAuthor,
} from "./BookDetails.css";
import Modal from "../UI/Modal/Modal";

const DetailsModal = ({
	visible,
	backgroundImg,
	title,
	author,
	description,
	toggleModal,
}) => {
	return (
		<Modal visible={visible} toggleModal={toggleModal}>
			<BookImage bgImg={backgroundImg} />
			<BookDetails>
				<BookTitle>{title}</BookTitle>
				<BookAuthor>{author}</BookAuthor>

				<BookDescription>{description}</BookDescription>
				<button onClick={toggleModal}>Close</button>
			</BookDetails>
		</Modal>
	);
};

export default DetailsModal;
