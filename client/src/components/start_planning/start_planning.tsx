import carrotWordCloud from '../../assets/images/CarrotWordCloud.jpg';
import StartButton from '../form_inputs/StartButton';
import { useNavigate } from 'react-router-dom';

const StartPlanning: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-row min-h-screen bg-yellow-100'>
			<div className='flex-1'>
				<img src={carrotWordCloud} alt='carrot shaped word cloud' className='h-96 w-auto border-4 border-orange-400' />
			</div>
			<div className='flex-1 flex flex-col items-center bg-yellow-100 text-red-900 h-96 pl-30'>
				<p className='text-center text-2xl'>
					<strong> Start Planning your meals here...</strong>
				</p>
				<StartButton onClick={() => navigate('/mealForm')} label='Start Planning' />
			</div>
		</div>
	);
};

export default StartPlanning;
