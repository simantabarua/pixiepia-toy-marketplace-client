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
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/toydetails/:id",
        element: <ToyDetails />,
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
        element: <MyToys />,
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
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
