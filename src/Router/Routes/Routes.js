import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServicesPage from "../../Pages/ServicesPage/ServicesPage";
import SignUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path : '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/services',
          element:<ServicesPage></ServicesPage>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ]);

  export default router;