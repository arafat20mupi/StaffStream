import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Toaster } from 'react-hot-toast';

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster/>
    </>
  );
};

export default Main;
