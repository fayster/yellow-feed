import * as api from './api';
import { addMessage } from '../Messages/ducks';

export const createMessage = (payload) => async (dispatch, getState): Promise<void> => {
	const uniqueName = getState().account.unique_name;
	const newMessage = await api.createMessage(uniqueName, payload);

	dispatch(addMessage(newMessage));
};