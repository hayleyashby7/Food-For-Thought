import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import StartPlanning from "../start_planning/start_planning";
import NotFound from "../not_found/not_found";
import StartButton from "../start_planning/StartButton";
import LoginForm from '../login/loginForm';
import HealthPage from "../health_page/health_page";
import DietInput from "../start_planning/DietInput";
import CalorieInput from "../start_planning/CalorieInput";
import RemoveIngredient from "../start_planning/RemoveIngredient";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="startplanning" element={<StartPlanning />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="health" element={<HealthPage />} />
        <Route
          path="startbutton"
          element={
            <StartButton
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              label={"Start Planning My Meal"}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="calorieinput" element={<CalorieInput />} />
        <Route
          path="dietinput"
          element={<DietInput onDietSelect={() => ""} />}
        />
        <Route path="removeingredient" element={<RemoveIngredient />} />
      </Route>
    </Routes>
  );
};

export default Router;
