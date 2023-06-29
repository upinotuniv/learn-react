import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/pages/app";
import Error from "./components/pages/404";
import Login from "./components/pages/login";
import LoginAdmin from "./components/pages/login-admin";
import Dashboard from "./components/pages/dashboard";
import DashboardAdmin from "./components/pages/dashboard-admin";
import Register from "./components/pages/register";
import Profile from "./components/pages/profile";
import Mathematics from "./components/pages/mathematics";
import Science from "./components/pages/science";
import Social from "./components/pages/social";
import Literature from "./components/pages/literature";
import MartialArt from "./components/pages/martial-art";
import Dance from "./components/pages/dance";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/math-class",
    element: <Mathematics />,
  },
  {
    path: "/science-class",
    element: <Science />,
  },
  {
    path: "/social-class",
    element: <Social />,
  },
  {
    path: "/literature-class",
    element: <Literature />,
  },
  {
    path: "/martial-art-class",
    element: <MartialArt />,
  },
  {
    path: "/dance-class",
    element: <Dance />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/dashboard-admin",
    element: <DashboardAdmin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
