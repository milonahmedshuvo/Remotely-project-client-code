import { useState } from "react";
import Navber1 from "./Components/Sheared/Navber/Navber1";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

function App() {
  return (
    <div>
       <RouterProvider router={router}>

       </RouterProvider>
    </div>
  );
}

export default App;
