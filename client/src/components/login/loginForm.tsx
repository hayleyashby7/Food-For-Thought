import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useUserContext } from '../../hooks/useUserContext';

export const LoginForm = () => {
	const { supabase, session } = useUserContext();

	if (!session) {
		return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
	} else {
		return <div>Logged in!</div>;
	}
};

export default LoginForm;
