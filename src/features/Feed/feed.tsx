import React, { useEffect } from 'react';
import { StateProps, DispatchProps } from './types';
import Messages from '../Messages';
import Loader from "../Loader";
import styled from "styled-components";

export const FeedContainer = styled.div`
	width: 100%;
`;

const Feed: React.FC<StateProps & DispatchProps> = ({ getMessages, isLoading }) => {
	useEffect(() => { getMessages(); }, []);

	return (
		<FeedContainer>
			{ isLoading && <Loader /> }
			{ !isLoading && <Messages /> }
		</FeedContainer>
	);
};

export default Feed;