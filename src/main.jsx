import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Gocen from "./components/pages";
import Error from "./components/pages/error.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gocen />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
