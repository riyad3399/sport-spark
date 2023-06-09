import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-lg font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link to='classes' className="text-lg font-semibold">Classes</Link>
      </li>
      <li>
        <Link className="text-lg font-semibold">Instuctors</Link>
      </li>

      <li>
        <Link className="text-lg font-semibold">Dashboard</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end pr-8 sm:pr-8">
          {user ? (
            <>
              <div className="flex flex-row gap-2 items-center">
                <img
                  className="h-[50px] w-[50px] border-2 rounded-full hidden sm:hidden md:block"
                  src={user && user.photoURL}
                  alt=""
                />
                <button onClick={handleLogout} className="btn-custom">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn-custom">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
