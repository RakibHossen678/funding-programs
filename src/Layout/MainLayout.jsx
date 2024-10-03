import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen ">
      <div className="lg:w-10/12 md:w-11/12  mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
