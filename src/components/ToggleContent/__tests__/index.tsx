import * as React from 'react';
import { render, fireEvent, getByTestId, findByTestId, findByText, queryByTestId } from '@testing-library/react';
import ToggleContent from '../index';
import 'jest-dom/extend-expect'

const toggle = (toggle) => <button data-testid="buttonOnShow" onClick={toggle}>Show</button>;
const content = (hide) => <button data-testid="buttonOnHide" onClick={hide}>Hide</button>;

test('toggle content', async () => {
	const { container } = render(<ToggleContent toggle={ toggle } content={ content } />);

	const showButton = getByTestId(container, 'buttonOnShow');

	expect(queryByTestId(container, 'buttonOnHide')).toBeNull();

	fireEvent.click(showButton);

	const hideButton = getByTestId(container, 'buttonOnHide');

	expect(hideButton).toBeDefined();

	fireEvent.click(hideButton);

	expect(queryByTestId(container, 'buttonOnHide')).toBeNull()
});