import { Auth } from '@supabase/auth-ui-react';
import { useUserContext } from '../../hooks/useUserContext';

export const LoginForm = () => {
	const { supabase, session } = useUserContext();

	return (
		<div className='flex flex-col items-center min-h-screen bg-yellow-100 min-w-fit'>
			{session ? (
				<div className='card prominent-shadow text-center sm:w-1/2 lg:w-1/3 h-1/3 border-4 border-orange-600 rounded-md py-4 px-16 bg-yellow-400 text-green-800'>
					<p className='text-lg sm:text-xl mb-4'>Logged in!</p>
					<button onClick={() => supabase.auth.signOut()} className='bg-red-500 text-white rounded p-2 hover:bg-red-600 transition'>
						Sign out
					</button>
				</div>
			) : (
				<div className='card prominent-shadow sm:w-1/2 lg:w-1/3 h-3/4 border-4 border-orange-600 rounded-md py-4 px-8 bg-yellow-400 text-green-800'>
					<Auth
						supabaseClient={supabase}
						appearance={{
							style: {
								button: { background: 'green', color: 'white' },
								message: { color: 'red' },
								label: { color: 'dark green' },
							},
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
