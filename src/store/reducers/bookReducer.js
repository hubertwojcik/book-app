import * as actionTypes from "../actions/bookActions";
import Book from "../../models/book";
import moment from "moment";

const initialState = {
	books: [],
	favoriteBooks: [],
	totalPages: 0,
	numOfPagesOfBooks: [],
	titleOfBooks: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_BOOK:
			const newBook = new Book(
				action.payload.author,
				action.payload.title,
				action.payload.isbn,
				action.payload.numOfPages,
				action.payload.start,
				action.payload.end
			);
			newBook.daysToFinish = newBook.numberOfDays();
			const bookTitle = action.payload.title;
			const bookPages = parseInt(action.payload.numOfPages);
			return {
				...state,
				books: state.books.concat(newBook),
				totalPages: state.totalPages + parseInt(action.payload.numOfPages),
				numOfPagesOfBooks: state.numOfPagesOfBooks.concat(bookPages),
				titleOfBooks: state.titleOfBooks.concat(bookTitle),
			};

		default:
			break;
	}

	return state;
};
export default reducer;
