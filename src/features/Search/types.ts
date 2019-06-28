export interface DispatchProps {
	getMessages(searchText: string): void;
}

export interface StateProps {
	value: string;
	isLoading: boolean;
}