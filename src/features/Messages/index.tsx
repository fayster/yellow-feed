import React from "react";
import { connect } from 'react-redux';
import Messages from './messages';
import { AppState } from "../../store/reducers";
import { sort } from './helpers';

const mapStateToProps = (state: AppState) => ({
	messages: sort(state.messages)
});

export default connect(mapStateToProps)(Messages);