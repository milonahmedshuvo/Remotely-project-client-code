import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Sheared/Layout";
import Home from "./Components/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]  
    }
])