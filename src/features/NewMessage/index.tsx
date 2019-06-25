import React from 'react';
import { connect } from 'react-redux';
import { createMessage } from './actions';
import NewMessage from './new-message';
import { DispatchProps } from './types';

const mapDispatchToProps = (dispatch): DispatchProps => ({
	createMessage: (text: string): Promise<void> => dispatch(createMessage({ text }))
});

export default connect(null, mapDispatchToProps)(NewMessage);