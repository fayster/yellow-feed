import React, { ReactElement, useState } from 'react';

export interface Props {
	toggle(show: () => void): void;
	content: (hide: () => void) => ReactElement;
}

export default ({ toggle, content }: Props) => {
	const [ canShow, setCanShow ] = useState<boolean>(false);
	const hide = () => setCanShow(false);
	const show = () => setCanShow(true);

	return (
		<>
			{ toggle(show) }
			{ canShow && content(hide) }
		</>
	);
};