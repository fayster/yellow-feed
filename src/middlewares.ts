import { LOCATION_CHANGE } from 'connected-react-router';
import { setSearchInitialValues } from './features/SearchInput/ducks';
import { endLoading } from './features/Loader/ducks';

export const locationChange = store => next => action => {
	if (action.type === LOCATION_CHANGE) {

		if (!action.payload.location.pathname.includes('search')) {
			store.dispatch(setSearchInitialValues());
		}

		store.dispatch(endLoading());
	}

	return next(action);
};
