import React, {useEffect} from 'react';
import styled from 'styled-components';
import Messages from '../Messages';
import { StateProps, DispatchProps } from './types';

export const SearchContainer = styled.div`
	width: 100%;
`;

export const Title = styled.div`
	border-bottom: 1px solid #f0f0f0;
`;

const Search: React.FC<StateProps & DispatchProps> = ({ value, getMessages }) => {
	useEffect(() => { getMessages() }, []);

	return (
		<SearchContainer>
			<Title>
				<h3>Search results for «{ value }»</h3>
			</Title>
			<Messages />
		</SearchContainer>
	);
};

export default Search;