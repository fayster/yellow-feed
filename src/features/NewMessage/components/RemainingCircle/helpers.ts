export const calculateOffset = (maxOffset: number, count: number, maxCount: number) => {
	return maxOffset * (1 - (count / maxCount));
};