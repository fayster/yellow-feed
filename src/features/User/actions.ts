import * as api from './api';
import { setUserInfo } from './ducks';
import { setMessages } from '../Messages/ducks';
import { startLoading, endLoading } from '../Loader/ducks';

export const getData = (id: string) => async (dispatch) => {
	dispatch(startLoading());

	await Promise.all([
		dispatch(getUserInfo(id)),
		dispatch(getMessages(id))
	]);

	dispatch(endLoading());
};

export const getUserInfo = (id: string) => async (dispatch) => {
	const userInfo = await api.getUser(id);

	dispatch(setUserInfo(userInfo));
};

export const getMessages = (id: string) => async (dispatch) => {
	const messages = await api.getMessages(id);

	dispatch(setMessages(messages));
};