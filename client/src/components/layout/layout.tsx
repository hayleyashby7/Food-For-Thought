import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col bg-green-300 min-h-screen">
      <Header />
      <main className="p-6 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
