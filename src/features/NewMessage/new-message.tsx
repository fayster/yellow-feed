import React, { useState } from "react";
import styled from "styled-components";
import ToggleContent from "../../components/ToggleContent";
import Modal from "../../components/Modal";
import RemainingCircle from './components/RemainingCircle';
import SendButton from './components/SendButton';

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


const minCount = 1;
const maxCount = 400;
const valueInitialState = '';

const renderToggle = (show: () => void) => {
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

export default (props) => {
	const [ value, setValue ] = useState<string>(valueInitialState);

	const handleChange = (event) => {
		const { value } = event.target;

		if (value.length <= maxCount) {
			setValue(value);
		}
	};

	const handleSend = () => {
		props.handleSend(value);
		setValue(valueInitialState);
	};

	const isDisabled = value.length < minCount || value.length > maxCount;

	return (
		<Add>
			<ToggleContent
				toggle={ renderToggle }
				content={ hide => (
					<Modal
						title='Compose new message'
						hide={ hide }
					>
						<Body>
							<TextArea value={ value } onChange={ handleChange } />
							<RemainingCircle count={ value.length } maxCount={ maxCount } />
						</Body>
						<Footer>
							<SendButton hide={ hide } disabled={ isDisabled } onClick={ handleSend }>
								Send
							</SendButton>
						</Footer>
					</Modal>
				)}
			/>
		</Add>
	);
}