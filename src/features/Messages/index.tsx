import React from "react";
import { connect } from 'react-redux';
import Messages from './messages';
import { AppState } from "../../store/reducers";
import { sortedMessagesSelector } from './selectors';

const mapStateToProps = (state: AppState) => ({
	messages: sortedMessagesSelector(state)
});

export default connect(mapStateToProps)(Messages);