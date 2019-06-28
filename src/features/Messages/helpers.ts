import { Props as Message } from "../../components/Message";

export const sortComparator = (message1: Message, message2: Message) => {
	const equals = message2.createdAt > message1.createdAt;

	return equals ? 1 : 0;
};