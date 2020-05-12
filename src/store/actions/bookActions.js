export const ADD_BOOK = "ADD_BOOK";

export const addBook = (bookDetails) => {
	return {
		type: ADD_BOOK,
		payload: bookDetails,
	};
};
