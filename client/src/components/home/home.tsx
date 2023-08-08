import React from 'react';
import DishImage from '../../assets/images/dishes.jpg';

const Home: React.FC = () => {
	return (
		<div className='flex flex-col items-center bg-yellow-100 text-red-900 h-full sm:h-96 md:max-w-xl mx-auto pb-4'>
			<p className='text-center sm:text-left text-sm sm:text-2xl px-2'>
				<strong>Welcome to our App!</strong>
			</p>
			<br />
			<p className='text-center sm:text-left text-sm sm:text-2xl px-2'>
				<strong>Here you can browse recipes for daily meal plans by calorie intake, diet type, nutritional info etc.</strong>
			</p>
			<br />
			<br />
			<img src={DishImage} alt='Images of different dishes' className='block mx-auto h-32 sm:h-64 card prominent-shadow shadow-lg transform hover:scale-105 transition-transform duration-300' />
		</div>
	);
};

export default Home;
