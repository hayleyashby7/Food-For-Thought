import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import { UserContext } from './components/user_context/user_context';
import { ContextProvider } from './providers/MealPlannerStore';

function App() {
	return (
		<>
			<UserContext>
				<ContextProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</ContextProvider>
			</UserContext>
		</>
	);
}
export default App;
