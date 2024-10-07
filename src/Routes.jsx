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
import FindJobs from "./Components/HomeOutComponents/FindJobs/FindJobs/FindJobs";
import Jobs from "./Components/HomeOutComponents/FindJobs/Jobs/Jobs";
import SearchData from "./Components/HomeOutComponents/FindJobs/FindJobs/SearchData";
import OneJobView from "./Components/HomeOutComponents/FindJobs/Jobs/OneJobView";
import SuccesfulSubmit from "./Components/HomeOutComponents/FindJobs/Jobs/SuccesfulSubmit";
import Applying from "./Components/HomeOutComponents/JobSeeker/JobSeekerProfile/Applying/Applying";
import EmployerLayout from "./Components/HomeOutComponents/Employer/EmployerLayout/EmployerLayout";
import EmployerProfile from "./Components/HomeOutComponents/Employer/EmployerProfile/EmployerProfile";
import EmployerJobPost from "./Components/HomeOutComponents/Employer/EmployerJobPost/EmployerJobPost";
import EmployerPost from "./Components/HomeOutComponents/JobSeeker/EmployerPost/EmployerPost";
import AdminLayout from "./Components/HomeOutComponents/AdminCompoonents/AdminLayout/AdminLayout";
import UserInfo from "./Components/HomeOutComponents/AdminCompoonents/UserInfo/UserInfo";
import AlljobPost from "./Components/HomeOutComponents/AdminCompoonents/AlljobPost/AlljobPost";
import AdminEmployerPost from "./Components/HomeOutComponents/AdminCompoonents/EmployerPost/AdminEmployerPost";
import Jobhistory from "./Components/HomeOutComponents/JobSeeker/JobSeekerProfile/MyJobPost/Jobhistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sixcompany",
        element: <SixCompany></SixCompany>,
      },
      {
        path: "/howcanhelp",
        element: <HowCanhelp> </HowCanhelp>,
      },
      {
        path: "/findjobs",
        element: <FindJobs></FindJobs>,
        children: [
          {
            path: "/findjobs",
            element: <Jobs></Jobs>,
          },
          {
            path: "/findjobs/searchDataShow",
            element: <SearchData></SearchData>,
          },
          {
            path: "/findjobs/oneviewpost/:id",
            element: <OneJobView></OneJobView>,
            loader: async ({ params }) => {
              return fetch(
                `https://remotely-project-server.vercel.app/alljobOneViewPost/${params.id}`
              );
            },
          },
        ],
      },
      {
        path: "/succesfulSubmit",
        element: <SuccesfulSubmit></SuccesfulSubmit>,
      },
      {
        path: "/login",
        element: <Login> </Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/companyJob/:id",
        element: <OnepostDatails></OnepostDatails>,
        loader: async ({ params }) => {
          return fetch(`https://remotely-project-server.vercel.app/jobSingle/${params.id}`);
        },
      },
      {
        path: "/DainamicRoute/:id",
        element: <ExploreCompany></ExploreCompany>,
        loader: async ({ params }) => {
          return fetch(
            `https://remotely-project-server.vercel.app/singleCompanydatails/${params.id}`
          );
        },
        children: [
          {
            path: "/DainamicRoute/:id",
            element: <Overview></Overview>,
            loader: async ({ params }) => {
              return fetch(
                `https://remotely-project-server.vercel.app/singleCompanydatails/${params.id}`
              );
            },
          },
          {
            path: "/DainamicRoute/:id/:companyName",
            element: <Jobpost> </Jobpost>,
            loader: async ({ params }) => {
              return fetch(`https://remotely-project-server.vercel.app/job/${params.companyName}`);
            },
          },
        ],
      },
    ],
  },
  // job seeker layout and start components
  {
    path: "/jobSeeker",
    element: <JobSeekerLayout></JobSeekerLayout>,
    children: [
      {
        path: "/jobSeeker",
        element: <JobSeekerProfile></JobSeekerProfile>,
        children: [
          {
            path: "/jobSeeker/ddd",
            element: <MyJobPost></MyJobPost>,
          },
          {
            path: "/jobSeeker/applying",
            element: <Applying></Applying>
          },
          {
             path: "/jobSeeker/employerJobpost",
             element: <EmployerPost></EmployerPost>
          },
          // job seaker history 
          {
            path: "/jobSeeker/jobhistory",
            element: <Jobhistory></Jobhistory>
          }
        ],
      },
    ],
  },
  //  Employer Layout and start components 
  {
    path: "/employer",
    element: <EmployerLayout></EmployerLayout>,
    children: [
       {
          path:"/employer",
          element: <EmployerProfile></EmployerProfile>,
          children: [
            {
              path:"/employer/jobpost",
              element:<EmployerJobPost></EmployerJobPost>
           }
          ]
       },
       
    ]
  },

  // Admin layout and start components setup 
  {
      path: "/admin",
      element: <AdminLayout></AdminLayout>,
      children: [
         {
            path: "/admin",
            element: <UserInfo></UserInfo>
         },
         {
            path: "/admin/alljob",
            element: <AlljobPost></AlljobPost>
         },
         {
            path: "/admin/employerpost",
            element: <AdminEmployerPost></AdminEmployerPost>
         }
      ]
  }

]);
