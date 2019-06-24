import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import history from '../history';
import { locationChange } from '../middlewares';

const router = routerMiddleware(history);

const middlewares = applyMiddleware(thunk, router, locationChange);
const enhancer = composeWithDevTools(middlewares);
const store = createStore(reducers, enhancer);

export default store;