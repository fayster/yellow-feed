import { createReducer } from 'redux-create-reducer';
import { UserInfo, SetUserInfoAction, Actions } from "./types";

// Constants
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_MESSAGES = 'SET_MESSAGES';

// Reducer
const initialState: UserInfo = {
	unique_name: null,
	name: '',
	description: '',
	avatar: '',
	_id: ''
};

export default createReducer<UserInfo, Actions>(initialState, {
	[SET_USER_INFO]: (state: UserInfo, action) => {
		return action.payload;
	}
});


// Base actions
export const setUserInfo = (userInfo: UserInfo): SetUserInfoAction => ({
	type: SET_USER_INFO,
	payload: userInfo
});