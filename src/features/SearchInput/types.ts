export interface StateProps {
	value: string
}

export interface DispatchProps {
	onEnter(value: string): void;
	onChange(value: string): void;
}

export interface SetSearchTempValueAction {
	type: 'SET_SEARCH_TEMP_VALUE';
	payload: string;
}

export interface SetSearchValueAction {
	type: 'SET_SEARCH_VALUE';
	payload: string;
}

export interface SetSearchInitialValuesAction {
	type: 'SET_SEARCH_INITIAL_VALUES';
}

export type Actions = SetSearchTempValueAction | SetSearchValueAction | SetSearchInitialValuesAction;