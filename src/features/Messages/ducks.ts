import { createReducer } from 'redux-create-reducer';
import { Props as Message } from '../../components/Message'
import { Actions, AddMessageAction, RemoveMessageAction, SetMessagesAction } from "./types";

// Constants
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

// Reducer
const initialState: Array<Message> = [];

export default createReducer<Array<Message>, Actions>(initialState, {
	[ADD_MESSAGE]: (state: Array<Message>, action) => {
		return state.concat(action.payload.message);
	},
	[REMOVE_MESSAGE]: (state: Array<Message>, action) => {
		return state.filter(({ _id }) => _id === action.payload.id);
	},
	[SET_MESSAGES]: (state: Array<Message>, action) => {
		return action.payload.messages;
	}
});


// Base actions
export const addMessage = (message: Message): AddMessageAction => ({
	type: ADD_MESSAGE,
	payload: { message }
});

export const removeMessage = (id: string): RemoveMessageAction => ({
	type: REMOVE_MESSAGE,
	payload: { id }
});

export const setMessages = (messages: Array<Message>): SetMessagesAction => ({
	type: SET_MESSAGES,
	payload: { messages }
});