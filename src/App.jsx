import { useState } from "react";
import Navber1 from "./Components/Sheared/Navber/Navber1";
import { RouterProvider } from "react-router-dom";
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
    </div>
  );
}

export default App;
