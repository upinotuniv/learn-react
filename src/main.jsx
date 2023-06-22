import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/pages/sign-in.jsx";
import Product from "./components/pages/product.jsx";
import DetailProduct from "./components/pages/detail-product.jsx";
import Error from "./components/pages/404.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/detail-product/:id",
    element: <DetailProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
