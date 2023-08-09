import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import LogoutButton from '../login/LoginButton';

interface Nav_Item_Link_Props {
	linkTo: string;
	text: string;
}

const Nav_Item_Link: React.FC<Nav_Item_Link_Props> = ({ linkTo, text }) => (
	<li>
		<NavLink to={linkTo} className={({ isActive }) => (isActive ? 'text-red-500' : 'text-green-800')}>
			{text}
		</NavLink>
	</li>
);

const Nav_Item: React.FC<Nav_Item_Link_Props> = ({ linkTo, text }) => (
	<span className='custom-shadow mx-2 whitespace-nowrap'>
		<Nav_Item_Link linkTo={linkTo} text={text} />
	</span>
);

const Nav: React.FC = () => {
	const { id, supabase } = useUserContext();

	return (
		<nav className='flex flex-col sm:flex-row items-center w-full text-center'>
			<ul className='whitespace-normal flex flex-col flex-grow sm:flex-row md:justify-start w-full font-bold text-lg'>
				<Nav_Item linkTo='/' text='Home' />
				<Nav_Item linkTo='/startplanning' text='Start Plan' />
				{id ? <Nav_Item linkTo='/userMealPlan' text='Saved Plans' /> : null}
			</ul>
			<ul className='flex flex-col shrink sm:flex-row justify-end font-bold text-lg w-full'>
				{!id ? (
					<Nav_Item linkTo='/login' text={'Sign In/Up'} />
				) : (
					<span className='custom-shadow mx-2 whitespace-nowrap'>
						<LogoutButton onClick={() => supabase.auth.signOut()} />
					</span>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
