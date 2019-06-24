import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo('en-US');

export const format = (date: string) => {
	const currentDate = Date.now();

	return timeAgo.format(currentDate - (currentDate - new Date(date).getTime()));
};