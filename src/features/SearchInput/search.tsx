import React from 'react';
import styled from "styled-components";
import { DispatchProps, StateProps } from './types';

export const SearchContainer = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	padding: 20px;
	
	& > input {
		width: 100%;
		background: #f3f3f3;
		padding-left: 15px;
		padding-right: 15px;
		border: 0;
		border-radius: 5px;
		color: #444;
		font-size: 14px;
		font-style: normal;
		font-weight: normal;
		height: 37px;
		line-height: 1.5em;
		margin: 0;
		text-align: left;
	}
`;

const Search: React.FC<DispatchProps & StateProps> = ({ onEnter, onChange, value }) => {
	const keyPress = (e) => {
		if (e.key === 'Enter') {
			onEnter(e.target.value);
		}
	};

	return (
		<SearchContainer>
			<input
				type="text"
				placeholder="Enter something..."
				value={ value }
				onKeyPress={ keyPress }
				onChange={ (e) => onChange(e.target.value) }
			/>
		</SearchContainer>
	);
};

export default Search;