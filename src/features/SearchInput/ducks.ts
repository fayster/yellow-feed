import { createReducer } from 'redux-create-reducer';
import { Actions, SetSearchInitialValuesAction, SetSearchTempValueAction, SetSearchValueAction } from './types';

// Constants
export const SET_SEARCH_TEMP_VALUE = 'SET_SEARCH_TEMP_VALUE';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_SEARCH_INITIAL_VALUES = 'SET_SEARCH_INITIAL_VALUES';

// Reducer
export interface State {
	tempValue: string;
	value: string;
}

const initialState: State = {
	tempValue: '',
	value: ''
};

export default createReducer<State, Actions>(initialState, {
	[SET_SEARCH_TEMP_VALUE]: (state: State, action) => {
		return {
			...state,
			tempValue: action.payload
		};
	},
	[SET_SEARCH_VALUE]: (state: State, action) => {
		return {
			...state,
			value: action.payload
		};
	},
	[SET_SEARCH_INITIAL_VALUES]: () => {
		return initialState;
	}
});


// Base actions
export const setSearchTempValue = (searchValue: string): SetSearchTempValueAction => ({
	type: SET_SEARCH_TEMP_VALUE,
	payload: searchValue
});

export const setSearchValue = (searchValue: string): SetSearchValueAction => ({
	type: SET_SEARCH_VALUE,
	payload: searchValue
});

export const setSearchInitialValues = (): SetSearchInitialValuesAction => ({
	type: SET_SEARCH_INITIAL_VALUES
});