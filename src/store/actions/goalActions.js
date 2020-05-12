export const SET_GOAL = "SET_GOAL";

export const setGoal = (goal) => {
	return {
		type: SET_GOAL,
		payload: goal,
	};
};
