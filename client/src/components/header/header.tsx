import Nav from './nav';
import FFTLogo from '../../assets/images/logo.png';

const Header: React.FC = () => (
	<header className='bg-yellow-400 text-green-800 border border-black p-2 font-bold w-screen min-w-fit flex flex-col sm:flex-row justify-start box-border'>
		<div className='flex flex-col sm:flex-row items-center'>
			<img src={FFTLogo} alt='Food For Thought Logo' className='mx-auto h-24 md:h-20 m-2' />
			<h1 className='p-2 m-2 gradient-text text-xl md:text-2xl text-center'>
				<strong>Food For Thought</strong>
			</h1>
		</div>
		<Nav />
	</header>
);
export default Header;
