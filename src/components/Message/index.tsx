import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../Icon/index';
import commentsIcon from './assets/comments.svg';
import repostsIcon from './assets/reposts.svg';
import likesIcon from './assets/likes.svg';
import { format } from '../../helpers/date';

export const MessageContainer = styled.div`
	padding: 28px 0;
	border-bottom: 1px solid #f0f0f0;
`;

export const Content = styled.div`
	margin: 3px 0 3px;
`;

export const MessageHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Author = styled(Link)`
	color: #000;
	margin-right: 6px;
`;

export const MediaContent = styled.div`
	margin-top: 15px;
	
	& > img {
		border-radius: 12px;
		border: 1px solid rgba(0,0,0,0.1);
		width: 50%;
	}
`;

export const MessageAttrs = styled.ul`
	display: flex;
	flex-direction: row;
`;

export const MessageAttrsItem = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #a5acb3;
	font-size: 13px;
	
	& > span {
		margin-right: 24px;
	}
`;

export const MessageAttrsLink = styled.a`
	width: 20px;
	height: 20px;
	margin-right: 6px;
`;

export const MessageAttrsIcon = styled(Icon)`	
	fill: #5b5b5b;
`;

export interface Props {
	_id: string
	createdAt: string;
	authorId: string;
	text?: string;
	media?: string;
	comments: number;
	reposts: number;
	likes: number;
}

const Message: React.FC<Props> = (props: Props) => {
	return (
		<MessageContainer>
			<MessageHeader>
				<Author to={`/user/${ props.authorId.replace(/\s/g, '') }`}>{ props.authorId }</Author>
				<time>{ format(props.createdAt) }</time>
			</MessageHeader>
			<Content>
				<span>{ props.text }</span>
				{ !!props.media &&
					<MediaContent>
						<img src={ props.media } alt="media-content" />
					</MediaContent>
				}
			</Content>
			<MessageAttrs>
				<MessageAttrsItem>
					<MessageAttrsLink>
						<MessageAttrsIcon src={ commentsIcon } />
					</MessageAttrsLink>
					<span>{ props.comments }</span>
				</MessageAttrsItem>
				<MessageAttrsItem>
					<MessageAttrsLink href='#'>
						<MessageAttrsIcon src={ repostsIcon } />
					</MessageAttrsLink>
					<span>{ props.reposts }</span>
				</MessageAttrsItem>
				<MessageAttrsItem>
					<MessageAttrsLink>
						<MessageAttrsIcon src={ likesIcon } />
					</MessageAttrsLink>
					<span>{ props.likes }</span>
				</MessageAttrsItem>
			</MessageAttrs>
		</MessageContainer>
	);
};

export default React.memo<Props>(Message);