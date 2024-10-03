import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen ">
      <div className="lg:w-10/12 md:w-11/12  mx-auto">
        <Navbar />
        <div className="min-h-[calc(100vh-370px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
