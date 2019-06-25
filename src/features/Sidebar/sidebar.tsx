import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StateProps } from './types';
import Icon from '../../components/Icon';
import FeedSvg from './assets/feed.svg';
import UsersSvg from './assets/users.svg';

export const SidebarContainer = styled.aside`
	display: flex;
	flex-direction: column;
	width: 250px;
	background-color: #4f5a6e;
	position: fixed;
	top: 0;
	bottom: 0;
`;

export const Logo = styled(Link)`
	width: 100%;
	height: 65px;
	text-align: center;
	display: block;
	background: #424b5f;
	white-space: nowrap;
	text-decoration: none;
	color: #fff;
	font-size: 21px;
	font-weight: 700;
	line-height: 65px;
	
	&:hover {
		text-decoration: none;
	}
`;

export const UserPanel = styled.div`
	margin: 0 12px;
	padding: 12px 0;
	border-bottom: 1px solid #485265;
	display: flex;
	flex-direction: row;
`;

export const UserAvatar = styled(Link)`
	margin: 0 12px 0 0;
	
	& > img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

export const UserName = styled(Link)`
	display: inline-block;
	color: #fff;
	white-space: nowrap;
	line-height: 36px;
`;

export const MenuLink = styled(Link)`
	color: #a7b3cb;
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 15px;
	font-weight: 700;
	height: 40px;
	padding: 0 12px;
`;

export const MenuIcon = styled(Icon)`
	width: 16px;
	height: 16px;
	margin-right: 12px;	
`;

export const MenuTitle = styled.span`
	line-height: 40px;
`;

const Sidebar: React.FC<StateProps> = ({ avatar, unique_name, name }) => {
	return (
		<SidebarContainer>
			<Logo to='/'>Yellow Feed</Logo>
			<UserPanel>
				<UserAvatar replace to={`/user/${ unique_name }`}>
					<img src={ avatar } alt='avatar' />
				</UserAvatar>
				<UserName replace to={`/user/${ unique_name }`}>
					{ name }
				</UserName>
			</UserPanel>
			<ul>
				<li>
					<MenuLink to="/">
						<MenuIcon src={ FeedSvg } />
						<MenuTitle>Feed</MenuTitle>
					</MenuLink>
				</li>
				<li>
					<MenuLink to="/users">
						<MenuIcon src={ UsersSvg } />
						<MenuTitle>Users</MenuTitle>
					</MenuLink>
				</li>
			</ul>
		</SidebarContainer>
	);
};

export default Sidebar;