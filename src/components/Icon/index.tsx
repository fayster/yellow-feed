import React from 'react';
import styled from 'styled-components';
import InlineSVG from 'svg-inline-react';

export default styled(InlineSVG)`
	fill: ${props => props.inputColor || 'black' };
`;