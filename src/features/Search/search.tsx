import React, {useEffect} from 'react';
import styled from 'styled-components';
import { StateProps, DispatchProps } from './types';
import Messages from '../Messages';
import Loader from '../Loader';

export const SearchContainer = styled.div`
	width: 100%;
`;

export const Title = styled.div`
	border-bottom: 1px solid #f0f0f0;
`;

const Search: React.FC<StateProps & DispatchProps> = ({ value, isLoading, getMessages }) => {
	useEffect(() => { getMessages(value) }, [ value ]);

	return (
		<SearchContainer>
			{ isLoading && <Loader /> }
			{ !isLoading &&
				<>
					<Title>
						<h3>Search results for «{ value }»</h3>
					</Title>
					<Messages />
				</>
			}
		</SearchContainer>
	);
};

export default Search;