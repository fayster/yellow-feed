import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { StateProps } from './types';
import { AppState } from "../../store/reducers";

const mapStateToProps = (state: AppState): StateProps => state.account;

export default connect<StateProps>(mapStateToProps)(Sidebar);