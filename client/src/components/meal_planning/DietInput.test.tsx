import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import DietInput from './DietInput';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders select input with default option', async () => {
	// Arrange
	render(<DietInput inputChanged={jest.fn()} />);

	//Act
	const dietLabel = await screen.findByLabelText('Dietary Restrictions');
	const dietSelect = await screen.findByRole('combobox');

	// Assert
	expect(dietLabel).toBeInTheDocument();
	expect(dietSelect).toBeInTheDocument();
	expect(dietSelect).toHaveValue('None');
});

test('Populates select input with diet options from API request', async () => {
	// Arrange
	render(<DietInput inputChanged={jest.fn()} />);

	// Act
	const dietSelect = await screen.findByRole('combobox');
	const defaultOption = await screen.findByRole('option', { name: 'None' });
	const ketoOption = await screen.findByRole('option', { name: 'ketogenic' });
	const vegetarianOption = await screen.findByRole('option', { name: 'vegetarian' });

	// Assert
	expect(dietSelect).toBeInTheDocument();
	expect(defaultOption).toBeInTheDocument();
	expect(ketoOption).toBeInTheDocument();
	expect(vegetarianOption).toBeInTheDocument();
});

test('Calls inputChanged function when diet is selected and passes selection', async () => {
	// Arrange
	let option = '';

	const inputChanged = jest.fn((value) => {
		option += value;
	});

	render(<DietInput inputChanged={inputChanged} />);

	// Act
	const dietSelect = await screen.findByRole('combobox');
	const ketoOption = await screen.findByRole('option', { name: 'ketogenic' });
	await userEvent.selectOptions(dietSelect, ketoOption);

	// Assert
	expect(dietSelect).toBeInTheDocument();
	expect(ketoOption).toBeInTheDocument();
	expect(inputChanged).toHaveBeenCalledTimes(1);
	expect(inputChanged).toHaveBeenCalledWith('ketogenic');
	expect(option).toBe('ketogenic');
});
