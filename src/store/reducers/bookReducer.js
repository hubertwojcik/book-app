import * as actionTypes from "../actions/bookActions";
import { FinishedBook, CurrentBook } from "../../models/book";
import moment from "moment";

const initialState = {
	finishedBooks: [],
	currBooks: [],
	totalPages: 0,
	numOfPagesOfBooks: [],
	titleOfBooks: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_FINISHED_BOOK:
			const newBook = new FinishedBook(
				action.payload.author,
				action.payload.title,
				action.payload.isbn,
				action.payload.numOfPages,
				action.payload.start,
				action.payload.end
			);
			newBook.daysToFinish = newBook.numberOfDays();
			// const bookTitle = action.payload.title;
			// const bookPages = parseInt(action.payload.numOfPages);
			return {
				...state,
				finishedBooks: state.finishedBooks.concat(newBook),
				totalPages: state.totalPages + parseInt(action.payload.numOfPages),
			};

		case actionTypes.ADD_CURRENT_BOOK:
			const currBook = new CurrentBook(
				action.payload.author,
				action.payload.title,
				action.payload.isbn,
				action.payload.numOfPages,
				action.payload.start,
				action.payload.currentPage
			);
			return {
				...state,
				currBooks: state.currBooks.concat(currBook),
			};
		default:
			break;
	}

	return state;
};
export default reducer;
