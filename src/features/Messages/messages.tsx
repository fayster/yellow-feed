import React from "react";
import styled from "styled-components";
import Message from "../../components/Message";
import { StateProps } from './types';
import Icon from '../../components/Icon';
import SearchSvg from './assets/search.svg';

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 20px;
`;

export const SearchIconContainer = styled.div`
	width: 60px;
	height: 60px;
	padding: 15px 0;
`;

export const List = styled.ul`
	width: 100%;
`;

const Messages: React.FC<StateProps> = ({ messages }) => (
	<>
		{ !!messages.length && (
			<List>
				{ messages.map(message => (
					<Message key={ message._id } { ...message } />
				)) }
			</List>
		)}
		{ !messages.length &&
			<NotFoundContainer>
				<SearchIconContainer>
					<Icon src={ SearchSvg }/>
				</SearchIconContainer>
				Messages not found
			</NotFoundContainer>
		}
	</>
);

export default Messages;