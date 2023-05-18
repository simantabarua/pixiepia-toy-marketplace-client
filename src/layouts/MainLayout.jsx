import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
