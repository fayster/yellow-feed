import React from 'react';
import Gif from './assets/loader.gif';
import styled from 'styled-components';

export const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default () => {
	return (
		<LoaderContainer>
			<img src={ Gif } />
		</LoaderContainer>
	)
};