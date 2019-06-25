import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../../../features/Loader";
import RemainingCircle from "../RemainingCircle";
import { Props } from './types';
import Modal from '../../../../components/Modal';

export const TextArea = styled.textarea`
	width: calc(100% - 20px);
	height: 100px;
	border-radius: 12px;
	box-shadow: 0px 0px 0px 1px #d5dade;
	border: 0;
	padding: 10px;
	resize: none;
	position: relative;
	overflow: hidden;
	
	&:focus {
		outline: 0;
		box-shadow: 0px 0px 0px 2px #d5dade;
	}
`;

export const Body = styled.div`
	position: relative;
`;

export const Footer = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	position: relative;
`;

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

const minCount = 1;
const maxCount = 400;

const MessageModal: React.FC<Props> = ({ hide, createMessage }) => {
	const [ value, setValue ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	const startIsLoading = () => setIsLoading(true);

	const handleChange = ({ target: { value } }) => {
		if (value.length <= maxCount) {
			setValue(value);
		}
	};

	const onClick = () => {
		startIsLoading();
		createMessage(value).then(hide);
	};

	const isDisabled = value.length < minCount || value.length > maxCount;

	return (
		<Modal
			title='Compose new message'
			hide={ hide }
		>
			{ isLoading && <Loader /> }
			{ !isLoading && (
				<>
					<Body>
					<TextArea value={ value } onChange={ handleChange } />
					<RemainingCircle count={ value.length } maxCount={ maxCount } />
					</Body>
					<Footer>
						<Button disabled={ isDisabled } onClick={ onClick }>
							Send
						</Button>
					</Footer>
				</>
			) }
		</Modal>
	);
};

export default MessageModal;