import { render, screen } from '@testing-library/react';
import Home from './home';
import DishImage from '../../assets/images/dishes.jpg';

describe('Home', () => {
	it('renders the Home component', () => {
		const { container } = render(<Home />);
		expect(container).toBeInTheDocument();
	});

	it('displays welcome text', () => {
		render(<Home />);
		expect(screen.getByText(/Welcome to our/i)).toBeInTheDocument();
	});

	it('displays information about the app', () => {
		render(<Home />);
		expect(screen.getByText(/Here you can browse recipes for daily meal plans by calorie intake,/i)).toBeInTheDocument();
	});

	it('displays the dish image', () => {
		render(<Home />);
		const image = screen.getByAltText('Images of different dishes');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', DishImage);
	});
});
