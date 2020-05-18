export const ADD_FINISHED_BOOK = "ADD_FINISHED_BOOK";
export const ADD_CURRENT_BOOK = "ADD_CURRENT_BOOK";

export const addFinishedBook = (bookDetails) => {
	return {
		type: ADD_FINISHED_BOOK,
		payload: bookDetails,
	};
};
export const addCurrentBook = (bookDetails) => {
	return {
		type: ADD_CURRENT_BOOK,
		payload: bookDetails,
	};
};
