import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Messages from '../Messages';
import { Props } from "./types";
import Loader from "../Loader";

export const UserContainer = styled.div`
	width: 100%;
	padding: 20px;
`;

export const UserAvatar = styled.div`
	display: flex;
	justify-content: center;
	
	& > img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const UserName = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px 0;
	
	& > a {
		color: #000000;
	}
`;

export const UserBio = styled.div`
	display: flex;
	justify-content: center;
	color: #8c8c8c;
	padding: 10px 15px 20px 10px;
	border-bottom: 1px solid #ccc;
`;

const User: React.FC<Props> = ({ isLoading, avatar, unique_name, name, description, match, getData }) => {
	useEffect(() => { getData(match.params.user); }, [ match.params.user ]);

	return (
		<UserContainer>
			{ isLoading && <Loader /> }
			{ !isLoading &&
				<>
					<UserInfo>
						<UserAvatar>
							<img src={ avatar } />
						</UserAvatar>
						<UserName>
							<Link to={`/user/${ unique_name }`}>{ name }</Link>
						</UserName>
						<UserBio>
							{ description }
						</UserBio>
					</UserInfo>
					<Messages />
				</>
			}
		</UserContainer>
	);
};

export default User;