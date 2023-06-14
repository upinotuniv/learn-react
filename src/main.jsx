import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SignIn from "./components/pages/sign-in.jsx";
import SignUp from "./components/pages/sign-up.jsx";
import Catalog from "./components/pages/catalog.jsx";
import CatalogDetail from "./components/pages/detail-catalog.jsx";
import ErrorPage from "./components/pages/error-page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog-detail",
    element: <CatalogDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
