import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import Login from "../login/login";
import NotFound from "../not_found/not_found";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
