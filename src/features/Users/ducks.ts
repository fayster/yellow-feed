import { createReducer } from 'redux-create-reducer';
import { UserInfo } from '../User/types';
import { SetUsersAction, Actions } from './types';

// Constants
export const SET_USERS = 'SET_USERS';

const initialState: Array<UserInfo> = [];

// Reducer
export default createReducer<Array<UserInfo>, Actions>(initialState, {
	[SET_USERS]: (state, action) => {
		return action.payload;
	}
});

// Base actions
export const setUsers = (users: Array<UserInfo>): SetUsersAction => ({
	type: SET_USERS,
	payload: users
});