# Project Title

# Sport Spark <a name="TOP"></a>

React

> project

## Description

Provide a detailed description of your project. Explain its purpose, features, and any relevant information that users or developers should know.

## Installation

 Markup :  # install-package #

   - aos 
   - axios 
   - firebase 
   - localforage 
   - match-sorter 
   - react 
   - react-dom 
   - react-helmet-async 
   - react-hook-form 
   - react-icons 
   - react-loader-spinner 
   - react-query
   - react-responsive-carousel 
   - react-router-dom
   - sort-by 
   - sweetalert2 



# Route declaration
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
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
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
        path: 'viewmyclasses',
        element: <ViewMyClasses></ViewMyClasses>
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
        path: 'manageclass',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);

export default route;


## Live Link

# Hosted in Firebase -> https://racerxtoys-df94f.web.app/



## cmd server side dependencies

npm create vite@latest name-of-your-project -- --template react

npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i daisyui
npm i firebase
npm i mongodb
npm i express
npm i cors
npm i dotenv
npm i jsonwebtoken
npm i stripe
npm install react-icons --save



## License

Specify the license under which your project is distributed. This is important for others to understand the permissions and restrictions associated with your project.




## Private Route declaration

import { BallTriangle } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
  };

  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <BallTriangle
          height={180}
          width={180}
          radius={5}
          color="#0000FF"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;


