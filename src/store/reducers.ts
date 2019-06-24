import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import messages from '../features/Messages/ducks';
import account from '../features/Account/ducks';
import user from '../features/User/ducks';
import search from '../features/SearchInput/ducks';
import users from '../features/Users/ducks';
import isLoading from '../features/Loader/ducks';
import history from '../history';

const rootReducer = combineReducers({
	messages,
	account,
	user,
	search,
	users,
	isLoading,
	router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;