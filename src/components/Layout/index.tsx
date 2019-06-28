import React from 'react';
import styled from 'styled-components';

export const LayoutLayer = styled.div`
	display: flex;
	flex: auto;
	justify-content: center;
`;

export const WrapperLayer = styled.div`
	width: 1440px;
	display: flex;
	flex-direction: row;
`;

const Layout: React.FC = ({ children }) =>
	<LayoutLayer>
		<WrapperLayer>
			{ children }
		</WrapperLayer>
	</LayoutLayer>;

export default Layout;