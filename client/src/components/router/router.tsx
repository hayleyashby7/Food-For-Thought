import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../home/home';
import StartPlanning from '../start_planning/start_planning';
import NotFound from '../not_found/not_found';
import LoginForm from "../login/loginForm";
import HealthPage from '../health_page/health_page';
import MealForm from '../start_planning/mealPlanForm';
import MealPlanGenerator from "../meals/mealplan_generator";

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='startplanning' element={<StartPlanning />} />
				<Route path='login' element={<LoginForm />} />
				<Route path='health' element={<HealthPage />} />
				<Route path="mealplangenerator" element={<MealPlanGenerator />} />			
				<Route path='*' element={<NotFound />} />
				<Route path='mealForm' element={<MealForm />} />
			</Route>
		</Routes>
	);
};

export default Router;
