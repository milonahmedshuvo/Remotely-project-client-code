import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Sheared/Layout";
import Home from "./Components/Home/Home/Home";
import SixCompany from "./Components/Home/SixCompany/SixCompany";
import ExploreCompany from "./Components/Home/SixCompany/ExploreCompany/ExploreCompany";
import Overview from "./Components/Home/SixCompany/ExploreCompany/Manu/Overview/Overview";
import Jobpost from "./Components/Home/SixCompany/ExploreCompany/Manu/Jobpost/Jobpost";
import OnepostDatails from "./Components/Home/SixCompany/ExploreCompany/Manu/Jobpost/OnepostDatails";

export const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/sixcompany",
          element: <SixCompany></SixCompany>
        },
        {
          path: "/DainamicRoute/:id",
          element: <ExploreCompany></ExploreCompany>,
          loader: async ({params }) => {
            return fetch(`http://localhost:5000/singleCompanydatails/${params.id}`)
          },
          children: [
             {
                 path: "/DainamicRoute/:id",
                 element: <Overview></Overview>,
                 loader: async ({params }) => {
                  return fetch(`http://localhost:5000/singleCompanydatails/${params.id}`)
                },
             },
             {
                 path:"/DainamicRoute/:id/:companyName",
                 element: <Jobpost> </Jobpost>,
                 loader: async ({params}) => {
                  return fetch(`http://localhost:5000/job/${params.companyName}`)
                 },
                 children: [
                     {
                        path:"/DainamicRoute/:id/:companyName/:postId",
                        element: <OnepostDatails></OnepostDatails>,
                        loader: async ({params}) => {
                           return fetch(`http://localhost:5000/jobSingle/${params.postId}`)  
                        }
                     }
                 ]
             }
          ]
        }
        
      ]  
    }
])