import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoute><ToyDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://server-pixiepia.vercel.app/toy/${params.id}`),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update_toy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://server-pixiepia.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);

export default router;
