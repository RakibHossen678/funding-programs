import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import SignUp from "../components/SignUp";
import SingIn from "../components/SingIn";

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
        path: "/about us",
        element: <NotFound />,
      },
      {
        path: "/products",
        element: <NotFound />,
      },
      {
        path: "/payout",
        element: <NotFound />,
      },
      {
        path: "/affiliate",
        element: <NotFound />,
      },
      {
        path: "/Help center",
        element: <NotFound />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SingIn />,
      },
    ],
  },
]);

export default router;
