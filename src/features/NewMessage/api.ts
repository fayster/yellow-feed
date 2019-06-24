import axios from 'axios';
import { Props as Message } from '../../components/Message';

export const createMessage = async (authorId, { text, media }): Promise<Message> => {
	const response = await axios.post('/api/message', { authorId, text, media });

	return response.data;
};