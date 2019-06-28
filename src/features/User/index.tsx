import { connect } from 'react-redux';
import User from './user';
import { getData } from './actions'
import { DispatchProps, StateProps } from './types';
import { AppState } from "../../store/reducers";

const mapStateToProps = (state: AppState): StateProps => ({
	avatar: state.user.avatar,
	name: state.user.name,
	description: state.user.description,
	unique_name: state.user.unique_name,
	isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch, props): DispatchProps => ({
	getData: (userId: string) => dispatch(getData(userId))
});

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(User);