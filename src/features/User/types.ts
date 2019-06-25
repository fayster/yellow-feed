import { RouteComponentProps } from 'react-router-dom';

export interface UserInfo {
	unique_name: string;
	name: string;
	description: string;
	avatar: string;
	_id: string;
}

export interface StateProps {
	unique_name: string;
	name: string;
	description: string;
	avatar: string;
	isLoading: boolean;
}

export interface DispatchProps {
	getData(): void;
}

export interface SetUserInfoAction {
	type: 'SET_USER_INFO';
	payload: UserInfo;
}

export type Actions = SetUserInfoAction;

export interface RouteParams {
	user: string;
}

export type Props = DispatchProps & StateProps & RouteComponentProps<RouteParams>;