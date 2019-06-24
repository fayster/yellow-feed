import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from './actions';
import Search from './search';
import { setSearchTempValue } from "./ducks";

const mapStateToProps = (state) => ({
	value: state.search.tempValue
});

const mapDispatchToProps = (dispatch) => ({
	updateSearchValue: (value: string) => dispatch(updateSearchValue(value)),
	onChange: (value: string) => dispatch(setSearchTempValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);