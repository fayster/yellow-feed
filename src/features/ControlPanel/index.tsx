import React from "react";
import styled from "styled-components";
import NewMessage from '../NewMessage';
import Search from '../SearchInput';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 65px;
`;

export default () =>
	<Container>
		<Search />
		<NewMessage />
	</Container>;