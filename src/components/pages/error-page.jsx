import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-red-500 font-bold text-5xl">
        Sorry, page not found!
      </h1>
    </div>
  );
}
