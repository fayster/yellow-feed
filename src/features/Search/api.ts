import axios from 'axios';

export const getMessages = async (searchText: string) => {
	const response = await axios.get('/api/messages', { params: { searchText } });

	return response.data;
};