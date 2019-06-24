import React from "react";
import styled from "styled-components";

export const Button = styled.button`
	border: 0;
	border-radius: 16px;
	background: #4f5a6e;
	color: #fff;
	padding: 10px 15px;
	cursor: pointer;
	
	&:disabled {
		background: #d5dade;
		cursor: default;
	}
	
	&:active, &:focus {
		outline: none;
	}
`;

export interface Props {
	disabled: boolean;
	hide(): void;
	onClick(): void;
}

const SendButton: React.FC<Props> = ({ disabled, hide, onClick }) => {
	const handleClick = () => {
		onClick();
		hide();
	};

	return (
		<Button disabled={ disabled } onClick={ handleClick }>
			Send
		</Button>
	);
};

export default SendButton;