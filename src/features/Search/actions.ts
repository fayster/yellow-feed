import * as api from './api';
import { setMessages } from '../Messages/ducks';

export const getMessages = () => async (dispatch, getState) => {
	const state = getState();
	const searchText = state.search.value;
	const messages = await api.getMessages(searchText);

	dispatch(setMessages(messages));
};