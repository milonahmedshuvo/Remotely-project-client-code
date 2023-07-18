import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Sheared/Layout";
import Home from "./Components/Home/Home/Home";
import SixCompany from "./Components/Home/SixCompany/SixCompany";
import ExploreCompany from "./Components/Home/SixCompany/ExploreCompany/ExploreCompany";
import Overview from "./Components/Home/SixCompany/ExploreCompany/Manu/Overview/Overview";
import Jobpost from "./Components/Home/SixCompany/ExploreCompany/Manu/Jobpost/Jobpost";
import OnepostDatails from "./Components/Home/SixCompany/ExploreCompany/Manu/Jobpost/OnepostDatails";
import HowCanhelp from "./Components/HomeOutComponents/HowCanhelp/HowCanhelp";
import Login from "./Components/HomeOutComponents/User/Login/Login";
import Register from "./Components/HomeOutComponents/User/Register/Register";
import JobSeekerLayout from "./Components/HomeOutComponents/JobSeeker/JobSeekerLayout/JobSeekerLayout";
import JobSeekerProfile from "./Components/HomeOutComponents/JobSeeker/JobSeekerProfile/JobSeekerProfile";
import MyJobPost from "./Components/HomeOutComponents/JobSeeker/JobSeekerProfile/MyJobPost/MyJobPost";

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
           path: "/howcanhelp",
           element: <HowCanhelp> </HowCanhelp>
        },
         {
            path: '/login',
            element: <Login> </Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
          {
            path:"/companyJob/:id",
            element: <OnepostDatails></OnepostDatails>,
            loader: async ({params}) => {
            return fetch(`http://localhost:5000/jobSingle/${params.id}`)  
            }
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
                 }                
             },
             
              
          ]
        }
        
      ]  
    },
    // job seeker layout and start components 
    {
        path: "/jobSeeker",
        element: <JobSeekerLayout></JobSeekerLayout>,
        children: [
           {
               path: '/jobSeeker',
               element: <JobSeekerProfile></JobSeekerProfile>,
               children: [
                   {
                      path: "/jobSeeker/ddd",
                      element: <MyJobPost></MyJobPost>
                   }
               ]
           }
        ] 
    }
])