import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
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
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    }
  ]);

  export default router;