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

export default React.memo((props) =>
	<LayoutLayer>
		<WrapperLayer>
			{ props.children }
		</WrapperLayer>
	</LayoutLayer>
);