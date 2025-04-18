import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SidebarNav from "./Components/SidebarNav";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="hidden md:block">
        <SidebarNav />
      </div>

      <main className="bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
