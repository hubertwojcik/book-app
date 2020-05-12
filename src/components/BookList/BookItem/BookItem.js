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
	daysToFinish,
}) => {
	return (
		<ItemContainer>
			<ItemAuthor>Autor: {author}</ItemAuthor>
			<ItemTitle>Title: {title}</ItemTitle>
			<ItemIsbn>ISBN: {isbn}</ItemIsbn>
			<ItemNumOfPages>Pages: {numOfPages}</ItemNumOfPages>
			<ItemStart>Star date : {startDate}</ItemStart>
			<ItemEnd>End date: {endDate}</ItemEnd>
			<ItemDays>Days to finish: {daysToFinish}</ItemDays>
		</ItemContainer>
	);
};

export default BookItem;
