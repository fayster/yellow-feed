import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from './actions';
import Search from './search';
import { DispatchProps, StateProps } from './types';
import { AppState } from "../../store/reducers";

const mapStateToProps = (state: AppState): StateProps => ({
	value: state.search.value
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
	getMessages: () => dispatch(getMessages())
});

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Search);