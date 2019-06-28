import * as api from './api';
import { setMessages } from '../Messages/ducks';
import { startLoading, endLoading } from '../Loader/ducks';

export const getMessages = (searchText: string) => async (dispatch) => {
	dispatch(startLoading());

	const messages = await api.getMessages(searchText);

	dispatch(setMessages(messages));
	dispatch(endLoading());
};