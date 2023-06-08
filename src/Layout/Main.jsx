import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
