import { Props as Message } from '../../components/Message';

export const sort = (messages: Array<Message>) => {
	return [ ...messages ].sort((message1: Message, message2: Message) => {
		const date1 = new Date(message1.createdAt).getTime();
		const date2 = new Date(message2.createdAt).getTime();

		return date2 - date1;
	});
};