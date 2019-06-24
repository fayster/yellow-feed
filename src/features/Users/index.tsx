import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import Users from './users';
import { AppState } from "../../store/reducers";

const mapStateToProps = (state: AppState) => ({
	users: state.users,
	isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
	getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);