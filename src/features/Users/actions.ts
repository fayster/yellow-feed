import * as api from './api';
import { setUsers } from './ducks';
import { startLoading, endLoading } from '../Loader/ducks';

export const getUsers = () => async (dispatch) => {
	dispatch(startLoading());
	const users = await api.getUsers();

	dispatch(setUsers(users));
	dispatch(endLoading());
};