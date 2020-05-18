import React from "react";
import {
	ItemContainer,
	ItemAuthor,
	ItemTitle,
	ItemIsbn,
	ItemNumOfPages,
	ItemStart,
	ItemEnd,
	ItemDays,
} from "./BookItem.css";
const BookItem = ({
	author,
	title,
	isbn,
	numOfPages,
	startDate,
	endDate,
	currentPage,
	daysToFinish,
	finished,
}) => {
	return (
		<ItemContainer>
			<ItemAuthor>Autor: {author}</ItemAuthor>
			<ItemTitle>Title: {title}</ItemTitle>
			<ItemIsbn>ISBN: {isbn}</ItemIsbn>
			<ItemNumOfPages>Pages: {numOfPages}</ItemNumOfPages>
			<ItemStart>Star date : {startDate}</ItemStart>
			{finished ? (
				<>
					<ItemEnd>End date: {endDate}</ItemEnd>
					<ItemDays>Days to finish: {daysToFinish}</ItemDays>
				</>
			) : (
				<>
					<div>{currentPage}</div>
					<div>Estimated ending: </div>
				</>
			)}
		</ItemContainer>
	);
};

export default BookItem;
