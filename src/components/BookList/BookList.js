import React from "react";
import { useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";

import { Container, Title, ListContainer, ListItem } from "./BookList.css";
import BookItem from "./BookItem/BookItem";

const BookList = () => {
	const finishedBooks = useSelector((state) => state.books.finishedBooks);
	const currBooks = useSelector((state) => state.books.currBooks);

	const allBooks = finishedBooks.concat(currBooks);

	return (
		<Container>
			<Title>Book list!</Title>
			<Link to="/list">All Books</Link>
			<Link to="/list/finished">Finished Books</Link>
			<Link to="/list/reading">Currently Reading</Link>

			<ListContainer>
				<Route path="/list" exact>
					{allBooks.length !== 0 &&
						allBooks.map((item) =>
							item.hasOwnProperty("currPage") ? (
								<BookItem
									author={item.author}
									title={item.title}
									isbn={item.isbn}
									numOfPages={item.numOfPages}
									startDate={item.startDate}
									currentPage={item.currPage}
								/>
							) : (
								<BookItem
									finished
									author={item.author}
									title={item.title}
									isbn={item.isbn}
									numOfPages={item.numOfPages}
									startDate={item.startDate}
									endDate={item.endDate}
									daysToFinish={item.daysToFinish}
								/>
							)
						)}
				</Route>
				<Route path="/list/finished">
					{finishedBooks.length !== 0 &&
						finishedBooks.map((item) => (
							<BookItem
								finished
								author={item.author}
								title={item.title}
								isbn={item.isbn}
								numOfPages={item.numOfPages}
								startDate={item.startDate}
								endDate={item.endDate}
								daysToFinish={item.daysToFinish}
							/>
						))}
				</Route>
				<Route path="/list/reading">
					{currBooks.length !== 0 &&
						currBooks.map((item) => (
							<BookItem
								author={item.author}
								title={item.title}
								isbn={item.isbn}
								numOfPages={item.numOfPages}
								startDate={item.startDate}
								currentPage={item.currPage}
							/>
						))}
				</Route>
			</ListContainer>
		</Container>
	);
};

export default BookList;
