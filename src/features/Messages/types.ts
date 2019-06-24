import { Props as Message } from "../../components/Message";

export interface StateProps {
	messages: Array<Message>;
}

export interface AddMessageAction {
	type: 'ADD_MESSAGE',
	payload: {
		message: Message;
	}
}

export interface RemoveMessageAction {
	type: 'REMOVE_MESSAGE',
	payload: {
		id: string;
	}
}

export interface SetMessagesAction {
	type: 'SET_MESSAGES',
	payload: {
		messages: Array<Message>;
	}
}

export type Actions = AddMessageAction | RemoveMessageAction | SetMessagesAction;