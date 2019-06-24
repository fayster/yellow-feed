import React from 'react';
import Feed from './feed';
import { connect } from 'react-redux';
import { StateProps, DispatchProps } from './types';
import { getMessages } from './actions';

const mapStateToProps = (state): StateProps => ({
	isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
	getMessages: () => dispatch(getMessages())
});

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Feed);