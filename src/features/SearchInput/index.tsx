import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from './actions';
import Search from './search';
import { setSearchTempValue } from "./ducks";
import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state): StateProps => ({
	value: state.search.tempValue
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
	onEnter: (value: string) => dispatch(updateSearchValue(value)),
	onChange: (value: string) => dispatch(setSearchTempValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);