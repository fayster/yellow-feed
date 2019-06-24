import React from 'react';
import styled from 'styled-components';
import Messages from '../Messages';
import { DispatchProps, StateProps } from './types';

export const SearchContainer = styled.div`
	width: 100%;
`;

export const Title = styled.div`
	border-bottom: 1px solid #f0f0f0;
`;

class Search extends React.Component<StateProps & DispatchProps> {
	componentDidMount() {
		this.props.getMessages();
	}

	render() {
		return (
			<SearchContainer>
				<Title>
					<h3>Search results for «{ this.props.searchValue }»</h3>
				</Title>
				<Messages />
			</SearchContainer>

		);
	}
}

export default Search;