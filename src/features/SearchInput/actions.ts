import { push } from 'connected-react-router';
import { getMessages } from '../Search/actions';
import { setSearchValue } from './ducks';

export const updateSearchValue = (value: string) => dispatch => {
	dispatch(setSearchValue(value));
	dispatch(push('/search'));
	dispatch(getMessages());
};