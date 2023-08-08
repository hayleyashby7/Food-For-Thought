import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from './router';
import { renderWithRouter } from '../../utils/test_utils';

test('Router renders homepage', () => {
	renderWithRouter(<Router />);

	const homeElement = screen.getByRole('main');

	expect(homeElement).toBeInTheDocument();
	expect(homeElement.textContent).toContain('Welcome');
});
test('Router renders startplanning page', () => {
	renderWithRouter(<Router />, { route: '/startplanning' });

	const startPlanningElement = screen.getByRole('main');

	expect(startPlanningElement).toBeInTheDocument();
	expect(startPlanningElement).toHaveTextContent('Start Plan');
});
test('Router renders not found page', () => {
	renderWithRouter(<Router />, { route: '/page-not-found' });

	const notFoundHeading = screen.getByRole('heading', { level: 2 });
	const notFoundText = screen.getByText(/Sorry/i);

	expect(notFoundHeading).toBeInTheDocument();
	expect(notFoundHeading).toHaveTextContent('404 - Page Not Found!');
	expect(notFoundText).toBeInTheDocument();
	expect(notFoundText).toHaveTextContent('Sorry! Please go back to the homepage and try again.');
});
