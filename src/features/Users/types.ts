import { UserInfo } from '../User/types';

export interface StateProps {
	users: Array<UserInfo>;
	isLoading: boolean;
}

export interface DispatchProps {
	getUsers(): void;
}

export interface SetUsersAction {
	type: 'SET_USERS';
	payload: Array<UserInfo>;
}

export type Actions = SetUsersAction;