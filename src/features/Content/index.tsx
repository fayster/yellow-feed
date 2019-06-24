import React from 'react';
import styled from 'styled-components';
import ControlPanel from '../ControlPanel/index';

export const Content = styled.section`
	display: flex;
	flex: auto;
	flex-direction: column;
	background-color: #fff;
	overflow: auto;
	margin-left: 250px;
`;

export const Body = styled.div`
	padding: 0 30px 15px;
	display: flex;
	flex: auto;
`;

export default (props) =>
	<Content>
		<ControlPanel />
		<Body>
			{ props.children }
		</Body>
	</Content>