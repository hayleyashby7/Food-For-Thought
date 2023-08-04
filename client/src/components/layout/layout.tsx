import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col bg-yellow-100 min-h-screen w-full">
      <Header />
      <main className="p-6 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
