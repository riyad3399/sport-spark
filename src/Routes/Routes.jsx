import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import MyEnrolled from "../Pages/Dashboard/MyEnrolled/MyEnrolled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ViewMyClasses from "../Pages/Dashboard/VIewMyClasses/ViewMyClasses";
import SslPayment from "../Pages/Dashboard/sslPayment/SslPayment";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess/PaymentSuccess";
import LoginWithAnimation from "../LoginWithAnimation/LoginWithAnimation";
import MyBookmark from "../Pages/Dashboard/MyBookmark/MyBookmark";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "hello",
        element: <LoginWithAnimation></LoginWithAnimation>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },

      {
        path: "payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "myBookmark/:email",
        element: <MyBookmark />,
        loader: ({ params }) =>
          fetch(
            `https://sport-spark-server-riyad3399.vercel.app/bookmark/${params.email}`
          ),
      },
      {
        path: "myenrolled",
        element: <MyEnrolled></MyEnrolled>,
      },
      {
        path: "payhistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "sslpayment/:id",
        element: <SslPayment></SslPayment>,
      },

      {
        path: "viewmyclasses",
        element: <ViewMyClasses></ViewMyClasses>,
      },
      // admin routes
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageclass",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);

export default route;
