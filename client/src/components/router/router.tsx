import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../home/home';
import StartPlanning from '../meal_planning/StartPlanning';
import NotFound from '../not_found/not_found';
import LoginForm from '../login/loginForm';
import HealthPage from '../health_page/health_page';
import { UserMealPlanPage } from '../user_mealplans/userMealPlan';

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='startplanning' element={<StartPlanning />} />
				<Route path='login' element={<LoginForm />} />
				<Route path='health' element={<HealthPage />} />
				<Route path='userMealPlan' element={<UserMealPlanPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default Router;
