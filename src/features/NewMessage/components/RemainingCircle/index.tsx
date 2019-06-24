import React from "react";
import styled from 'styled-components';
import { calculateOffset } from "./helpers";

export const Circle = styled.svg`
	width: 20px;
	height: 20px;
`;

export const CircleContainer = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Count = styled.span`
	margin-right: 5px;
`;

const strokeDashOffset = 339.292;
const showRemainingCount = 20;

export interface Props {
	count: number;
	maxCount: number;
}

const RemainingCircle: React.FC<Props> = ({ count, maxCount }) => {
	const offset = calculateOffset(strokeDashOffset, count, maxCount);
	const remainingCount = maxCount - count;
	const isShowCount = remainingCount <= showRemainingCount;
	const processStrokeColor = isShowCount ? '#f77a52' : '#4f5a6e';

	return (
		<CircleContainer>
			{ isShowCount &&
				<Count>
					{ remainingCount }
				</Count>
			}
			<Circle viewBox="0 0 120 120">
				<circle
					cx="60"
					cy="60"
					r="54"
					fill="none"
					stroke="#e6e6e6"
					strokeWidth="12"
				/>
				<circle
					cx="60"
					cy="60"
					r="54"
					fill="none"
					stroke={ processStrokeColor }
					strokeWidth="12"
					strokeDasharray="339.292"
					strokeDashoffset={offset}
				/>
			</Circle>
		</CircleContainer>
	);
};

export default React.memo(RemainingCircle);