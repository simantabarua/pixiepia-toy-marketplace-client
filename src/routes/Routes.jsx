import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/toydetails",
        element: <ToyDetails />,
      },
      {
        path: "/addtoy",
        element: <AddToy />,
      },
      {
        path: "/mytoys",
        element: <MyToys />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;