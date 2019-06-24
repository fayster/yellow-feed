import axios from 'axios';

export const getUser = async (id: string) => {
	const response = await axios.get(`/api/user/${ id }`);

	return response.data;
};

export const getMessages = async (id: string) => {
	const response = await axios.get(`/api/messages/${ id }`);

	return response.data;
};