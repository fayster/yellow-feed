import { createSelector } from 'reselect';
import { AppState } from "../../store/reducers";
import { sortComparator } from './helpers';
import { Props as Message } from '../../components/Message';

const messageSelector = (state: AppState): Array<Message> => state.messages;
export const sortedMessagesSelector = createSelector(
	messageSelector,
	(messages: Array<Message>): Array<Message> => {
		return messages.sort(sortComparator);
	}
);