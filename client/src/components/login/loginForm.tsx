import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useUserContext } from '../../hooks/useUserContext';

export const LoginForm = () => {
	const { supabase, session } = useUserContext();

	return (
		<div className='h-screen flex justify-center '>
			{session ? (
				<div>
					<p>Logged in!</p>
					<button className='border border-black rounded-md py6 px-6 bg-yellow-400 text-green-800' onClick={() => supabase.auth.signOut()}>
						Sign out
					</button>
				</div>
			) : (
				<div>
					<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
				</div>
			)}
		</div>
	);
};

export default LoginForm;
