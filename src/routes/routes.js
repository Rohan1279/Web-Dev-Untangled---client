import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import MyReview from "../Pages/MyReview";
import ServiceDetail from "../Pages/ServiceDetail";
import Services from "../Pages/Services";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-rohan1279.vercel.app/services"
          ),
        element: <Services />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-rohan1279.vercel.app/service/${params.id}`
          ),
        element: <ServiceDetail />,
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
        path: "/myreview",
        element: (
          <ProtectedRoute>
            <MyReview />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <ProtectedRoute>
            <AddService />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
