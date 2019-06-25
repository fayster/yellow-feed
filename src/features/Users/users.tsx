import React, { useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StateProps, DispatchProps } from './types'
import Loader from '../Loader';

export const UsersContainer = styled.ul`
	width: 100%;
`;

export const UserContainer = styled.li`
	padding: 20px;
	border-bottom: 1px solid #f0f0f0;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const UserAvatar = styled.div`
	margin-right: 15px;

	& img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}
`;

export const UserName = styled.div`
	& a {
		color: #000;
	}
`;

const Users: React.FC<StateProps & DispatchProps> = (props) => {
	useEffect(() => { props.getUsers(); }, []);

	return (
		<UsersContainer>
			{ props.isLoading && <Loader /> }
			{ !props.isLoading &&
				<>
					{ props.users.map(user =>
						<UserContainer key={ user.unique_name }>
							<UserAvatar>
								<Link to={`/user/${ user.unique_name }`}>
									<img src={ user.avatar } />
								</Link>
							</UserAvatar>
							<UserName>
								<Link to={`/user/${ user.unique_name }`}>{ user.name }</Link>
							</UserName>
						</UserContainer>
					) }
				</>
			}
		</UsersContainer>
	);
};

export default Users;