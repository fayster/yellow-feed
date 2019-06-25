import { createReducer } from 'redux-create-reducer';

const initialState = {
	unique_name: 'test',
	name: 'Test',
	avatar: 'https://pbs.twimg.com/profile_images/1137818942913875969/NB3V2-3m_400x400.png'
};

export default createReducer(initialState, {});