import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Messages from '../Messages';
import { DispatchProps, StateProps } from "./types";
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

export interface UserState {
	user: string;
}

class User extends React.Component<StateProps & DispatchProps, UserState> {
	constructor(props) {
		super(props);

		this.state = {
			user: props.match.params.user
		};
	}

	componentDidMount() {
		this.props.getData();
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.match.params.user !== prevState.user) {
			return {
				user: nextProps.match.params.user,
			};
		}

		return null;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.user !== this.state.user) {
			this.props.getData();
		}
	}

	render() {
		return (
			<UserContainer>
				{ this.props.isLoading && <Loader /> }
				{ !this.props.isLoading &&
					<>
						<UserInfo>
							<UserAvatar>
								<img src={ this.props.avatar } />
							</UserAvatar>
							<UserName>
								<Link to={`/user/${ this.props.unique_name }`}>{ this.props.name }</Link>
							</UserName>
							<UserBio>
								{ this.props.description }
							</UserBio>
						</UserInfo>
						<Messages />
					</>
				}
			</UserContainer>
		);
	}
}

export default User;