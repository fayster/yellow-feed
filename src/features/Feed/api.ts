import axios from 'axios';

export const getMessages = async () => {
	const response = await axios.get('/api/messages');

	return response.data;
};