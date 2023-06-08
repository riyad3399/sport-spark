import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Footer from "../Pages/shared/Footer/Footer";
import SignUp from "../Pages/SignUp/SignUp";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'footer',
                element: <Footer></Footer>
            }
        ]
    }
])

export default route;