import React from "react";
import { useSelector } from "react-redux";
import { Container, Title, ListContainer, ListItem } from "./BookList.css";
import BookItem from "./BookItem/BookItem";

const BookList = () => {
	const books = useSelector((state) => state.books.books);

	return (
		<Container>
			<Title>Book list!</Title>
			<ListContainer>
				{books.length !== 0 &&
					books.map((item) => (
						<BookItem
							author={item.author}
							title={item.title}
							isbn={item.isbn}
							numOfPages={item.numOfPages}
							startDate={item.startDate}
							endDate={item.endDate}
							daysToFinish={item.daysToFinish}
						/>
					))}
			</ListContainer>
		</Container>
	);
};

export default BookList;
