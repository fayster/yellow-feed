import React from 'react';
import { StateProps, DispatchProps } from './types';
import Messages from '../Messages';
import Loader from "../Loader";
import styled from "styled-components";

export const FeedContainer = styled.div`
	width: 100%;
`;

class Feed extends React.Component<StateProps & DispatchProps> {
	componentDidMount() {
		this.props.getMessages();
	}

	render() {
		return (
			<FeedContainer>
				{ this.props.isLoading && <Loader /> }
				{ !this.props.isLoading && <Messages /> }
			</FeedContainer>

		);
	}
}

export default Feed;