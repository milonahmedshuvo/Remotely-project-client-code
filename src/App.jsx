import { useState } from "react";
import Navber1 from "./Components/Sheared/Navber/Navber1";
import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { router } from "./Routes";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



function App() {
  return (
    <div>
      
       <QueryClientProvider client={queryClient}>
           <RouterProvider router={router}>

           </RouterProvider>
       </QueryClientProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
