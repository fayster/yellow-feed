import React, { ReactElement, useCallback } from "react";
import styled from "styled-components";
import ToggleContent from "../../components/ToggleContent";
import { DispatchProps } from './types';
import MessageModal from './components/MessageModal';

export const Add = styled.div`
	width: 140px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 15px;
	
	& > a {
		width: 120px;
		height: 39px;
		background-color: #4f5a6e;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		border-radius: 6px;
	}
`;


const toggle = (show: () => void) => {
	const handleClick = (e) => {
		e.preventDefault();

		show();
	};

	return (
		<a onClick={ handleClick } href='#'>
			New post
		</a>
	);
};

const NewMessage: React.FC<DispatchProps> = ({ createMessage }) => {
	const content = useCallback((hide: () => void): ReactElement =>
			<MessageModal hide={ hide } createMessage={ createMessage } />,
		[]
	);

	return (
		<Add>
			<ToggleContent
				toggle={ toggle }
				content={ content }
			/>
		</Add>
	);
};

export default NewMessage;