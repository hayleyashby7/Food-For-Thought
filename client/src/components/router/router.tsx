import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import StartPlanning from "../start_planning/start_planning";
import NotFound from "../not_found/not_found";
import StartButton from "../start_planning/StartButton";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="startplanning" element={<StartPlanning />} />
        <Route path="*" element={<NotFound />} />
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
      </Route>
    </Routes>
  );
};

export default Router;
