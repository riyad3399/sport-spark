import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/Navbar/Navbar";
import ToggleThem from "../Components/ToggleThem/ToggleThem";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen pt-24">
        <Outlet></Outlet>
        <button className="top-[120px] right-0 fixed btn rounded-l-full hidden sm:block">
          <ToggleThem />
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
