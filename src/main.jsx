import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home/Home";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AllMovie from "./components/AllMovie/AllMovie";
import AddMovie from "./components/AddMovie/AddMovie";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import MyFavorites from "./components/MyFavorites/MyFavorites";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import MovieDetails from "./components/AllMovie/MovieDetails";
import Subscription from "./components/Subscription/Subscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <AllMovie />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/movies/${params.id}`),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoutes>
            <AddMovie />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFavorites",
        element: (
          <PrivateRoutes>
            <MyFavorites />
          </PrivateRoutes>
        ),
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
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
        path: "/subscription",
        element: <Subscription />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </AuthProvider>
  </StrictMode>
);
