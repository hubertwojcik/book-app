import * as React from "react";
import { addBook } from "../../store/actions/bookActions";
import styled from "styled-components";
import Modal from "styled-react-modal";
import BookDetails from "../BookDetails/BookDetails";
import AddBook from "../AddBook/AddBook";
import {
	ItemContainer,
	ItemAuthor,
	ItemTitle,
	ItemNumOfPages,
} from "../BookList/BookItem/BookItem.css";

const BookCard = ({
	backgroundImg,
	author,
	title,
	pageNumber,
	description,
	// publisher,
	isbn,
}) => {
	const [showDetails, setShowDetails] = React.useState(false);
	const [showAddBookModal, setShowAddBookModal] = React.useState(false);

	const toggleDetailModal = (e) => {
		setShowDetails(!showDetails);
	};
	const toggleAddModal = (e) => {
		setShowAddBookModal(!showAddBookModal);
	};

	return (
		<ItemContainer bgImg={backgroundImg}>
			<ItemAuthor>Author: {author}</ItemAuthor>
			<ItemTitle>Title: {title}</ItemTitle>
			<ItemNumOfPages>Pages: {pageNumber}</ItemNumOfPages>
			<button onClick={toggleDetailModal}>Show Details</button>
			<button onClick={toggleAddModal}>Add to your list</button>
			<BookDetails
				visible={showDetails}
				backgroundImg={backgroundImg}
				title={title}
				author={author}
				description={description}
				toggleModal={toggleDetailModal}
			/>
			<AddBook
				visible={showAddBookModal}
				toggleModal={toggleAddModal}
				authorOfBook={author}
				titleOfBook={title}
				isbn={isbn}
				pages={pageNumber}
			/>
		</ItemContainer>
	);
};

export default BookCard;
