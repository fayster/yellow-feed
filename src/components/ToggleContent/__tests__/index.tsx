import * as React from 'react';
import { render, fireEvent, getByTestId, queryByTestId } from '@testing-library/react';
import ToggleContent from '../index';

const buttonShowDataTestId = 'buttonOnShow';
const buttonHideDataTestId = 'buttonOnHide';

const toggle = (show: () => void) =>
	<button data-testid={ buttonShowDataTestId } onClick={ show }>Show</button>;

const content = (hide: () => void) =>
	<button data-testid={ buttonHideDataTestId } onClick={ hide }>Hide</button>;

test('Hide and show buttons work', async () => {
	const { container } = render(<ToggleContent toggle={ toggle } content={ content } />);
	const showButton = getByTestId(container, buttonShowDataTestId);

	expect(queryByTestId(container, buttonHideDataTestId)).toBeNull();

	fireEvent.click(showButton);

	const hideButton = getByTestId(container, buttonHideDataTestId);

	expect(hideButton).toBeDefined();
	expect(hideButton.textContent).toEqual('Hide');

	fireEvent.click(hideButton);

	expect(queryByTestId(container, buttonHideDataTestId)).toBeNull()
});