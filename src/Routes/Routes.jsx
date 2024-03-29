import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/SignIn-SignUp/Login";
import Register from "../pages/SignIn-SignUp/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },

        {
          path:'login',
          element:<Login></Login>
        },
        
        {
          path:'register',
          element:<Register></Register>
        }



      ]
    },
  ]);

  export default router;