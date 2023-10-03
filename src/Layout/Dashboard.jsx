import { Helmet } from "react-helmet-async";
import { FaHome, FaUsers, FaWallet, FaCheckCircle, FaSchool, FaBuilding,  } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { AiFillFileAdd } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [data] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  console.log(user)

  const adminMenu = (
    <>
      <li>
        <NavLink to="/dashboard/adminhome">
          <FaHome size={22} /> Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/allusers">
          <FaUsers size={22} /> All users
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageclass">
          <FaBuilding size={22} /> Manage Classes
        </NavLink>
      </li>
    </>
  );

  const instructorMenu = (
    <>
      <li>
        <NavLink to='/dashboard/instructor'>
          {" "}
          <FaHome size={22} /> Instructor Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addclass">
          <AiFillFileAdd size={22} /> Add A Class
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/viewmyclasses">
          <CiViewList  size={22} />View My Classes
        </NavLink>
      </li>
    </>
  );

  const studentMenu = (
    <>
      <li>
        <NavLink to="/dashboard/userhome">
          {" "}
          <FaHome size={22} /> User Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myclasses">
          {" "}
          <LuSchool size={22} /> My Selected Classes
          <div className="badge">+{data?.length || 0}</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myenrolled">
          <FaCheckCircle size={22} /> Enrolled Class
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/payhistory">
          <FaWallet size={22} /> Payment History
        </NavLink>
      </li>
    </>
  );

  const mainMenu = (
    <>
      {(isAdmin && adminMenu) ||
        (isInstructor && instructorMenu) ||
        studentMenu}
    </>
  );

  return (
    <div>
      <Helmet>
        <title>Dashboard - Sport Spark</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100 flex flex-col items-center justify-center">
          
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
          <div className="flex flex-col gap-2 items-center py-8 bg-gray-200 rounded-md">
              <img className="rounded-full h-20 w-20" src={user?.photoURL} alt="" />
              <h3 className="text-base font-semibold">{ user.displayName}</h3>
          </div>
            {mainMenu}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome size={22} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
               <FaSchool size={22}/>  classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
