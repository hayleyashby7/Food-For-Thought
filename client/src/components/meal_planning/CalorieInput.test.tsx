import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CalorieInput from './CalorieInput';

test('renders the input component', () => {
	const { getByLabelText } = render(<CalorieInput calories='' inputChanged={() => {}} />);
	const inputElement = getByLabelText('Daily Calories');
	expect(inputElement).toBeInTheDocument();
});

test('calls inputChanged function on input', () => {
	const mockInputChanged = jest.fn();
	const { getByLabelText } = render(<CalorieInput calories='' inputChanged={mockInputChanged} />);

	const inputElement = getByLabelText('Daily Calories');
	fireEvent.change(inputElement, { target: { value: '2000' } });

	expect(mockInputChanged).toHaveBeenCalledWith('2000', true);
});

test('displays an error message for invalid input', () => {
	const { getByLabelText, getByText } = render(<CalorieInput calories='' inputChanged={() => {}} />);

	const inputElement = getByLabelText('Daily Calories');
	fireEvent.change(inputElement, { target: { value: 'invalid' } });

	const errorMessage = getByText('Only numbers allowed');
	expect(errorMessage).toBeInTheDocument();
});
