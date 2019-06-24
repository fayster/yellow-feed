import { createReducer } from 'redux-create-reducer';

const initialState = {
	unique_name: 'test',
	name: 'Test',
	avatar: 'https://cdn.icon-icons.com/icons2/1465/PNG/512/178manastronaut2_100769.png'
};

export default createReducer(initialState, {});