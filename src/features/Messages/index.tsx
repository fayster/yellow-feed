import React from "react";
import { connect } from 'react-redux';
import Messages from './messages';
import { AppState } from "../../store/reducers";

const mapStateToProps = (state: AppState) => ({
	messages: state.messages
});

export default connect(mapStateToProps)(Messages);