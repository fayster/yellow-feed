import { createReducer } from 'redux-create-reducer';

// Constants
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

const initialState: boolean = false;

// Reducer
export default createReducer(initialState, {
	[START_LOADING]: (state, action) => {
		return true;
	},
	[END_LOADING]: (state, action) => {
		return false;
	}
});

// Base actions
export const startLoading = (): any => ({
	type: START_LOADING
});

export const endLoading = (): any => ({
	type: END_LOADING
});