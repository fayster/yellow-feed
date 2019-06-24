import ReactDOM from "react-dom";
import React, { ReactPortal } from "react";
import styled, { keyframes } from 'styled-components';
import Icon from '../Icon';
import closeSvg from './assets/close.svg';

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	overflow: hidden;
	outline: 0;
	background: rgba(0,0,0,0.5);
`;

export const ModalFade = keyframes`
	from { 
		transform: translateY(-50%);
		opacity: 0; 
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const ModalContainer = styled.div`
	max-width: 610px;
	width: 100%;
	position: fixed;
	top: 10%;
	left: 50%;
	margin-left: -305px;
	border: 1px solid #ddd;
	background-color: #fff;
	box-shadow: 0px 0px 0px 3px rgba(0,0,0,0.1);
	border-radius: 4px;
	z-index: 10;
	animation-name: ${ ModalFade };
  	animation-duration: .3s;
`;

export const ModalHeader = styled.div`
	background-color: #fff;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #d5dade;
	padding: 3px 15px;
`;

export const ModalBody = styled.div`
	padding: 15px;
	background: #e6ecf0;
`;

export const ModalTitleContainer = styled.h3`
	display: flex;
	flex-grow: 1;
`;

export const ModalCloseButtonContainer = styled.div`
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalCloseButton = styled.button`
	background: none;
	width: 20px;
	height: 20px;
	border: 0;
	cursor: pointer;
	padding: 0 3px;
	
	&:focus {
		outline: 0;
	}
`;

export interface Props {
	title: string;
	hide(): void;
}

const Modal: React.FC<Props> = ({ children, title, hide }): ReactPortal => (
	ReactDOM.createPortal(
		<ModalWrapper>
			<ModalContainer>
				<ModalHeader>
					<ModalTitleContainer>{ title }</ModalTitleContainer>
					<ModalCloseButtonContainer>
						<ModalCloseButton onClick={ hide }>
							<Icon src={ closeSvg } />
						</ModalCloseButton>
					</ModalCloseButtonContainer>
				</ModalHeader>
				<ModalBody>
					{ children }
				</ModalBody>
			</ModalContainer>
		</ModalWrapper>,
		document.getElementById('modal-root')
	)
);

export default Modal;