import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loading from "../components/common/Loading";

const MainLayout = () => {
  const {  loading } = useContext(AuthContext);

  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-pink-50 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
