import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import LogoutButton from '../login/LoginButton';

interface Nav_Item_Props {
	linkTo: string;
	text: string;
}

const Nav_Item: React.FC<Nav_Item_Props> = ({ linkTo, text }) => (
	<li>
		<NavLink to={linkTo} className={({ isActive }) => (isActive ? 'text-red-500' : 'text-green-800')}>
			{text}
		</NavLink>
	</li>
);

const Nav: React.FC = () => {
	const { id, supabase } = useUserContext();

	return (
		<nav className='flex flex-col sm:flex-row flex-grow items-center w-full text-center'>
			<ul className='flex flex-col sm:flex-row md:justify-start w-full font-bold text-lg'>
				<span className='custom-shadow mx-2 min-w-fit'>
					<Nav_Item linkTo='/' text='Home' />
				</span>
				<span className='custom-shadow mx-2 min-w-fit'>
					<Nav_Item linkTo='/startplanning' text='Start Plan' />
				</span>
				{id ? (
					<span className='custom-shadow mx-2 min-w-fit'>
						<Nav_Item linkTo='/userMealPlan' text='Saved Plans' />
					</span>
				) : null}
			</ul>
			<ul className='flex flex-col sm:flex-row justify-end font-bold text-lg w-full'>
				<span className='custom-shadow mx-2 min-w-fit'>{!id ? <Nav_Item linkTo='/login' text={'Sign In/Up'} /> : <LogoutButton onClick={() => supabase.auth.signOut()} />}</span>
			</ul>
		</nav>
	);
};

export default Nav;
