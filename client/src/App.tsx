import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import { UserContext } from './components/user_context/user_context';


function App() {
	return (
		<>
			<UserContext>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</UserContext>
		</>
	);
}
export default App;
