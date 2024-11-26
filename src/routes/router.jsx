import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
            element: <Home></Home>,
        loader : ()=>fetch("http://localhost:3000/coffees")
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);
export default router;
