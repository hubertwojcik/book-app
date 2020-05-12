import { SET_GOAL } from "../actions/goalActions";

const initialState = {
	booksGoal: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GOAL:
			return {
				...state,
				booksGoal: action.payload,
			};
		default:
			return state;
	}
};
export default reducer;
