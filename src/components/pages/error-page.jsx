import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <h1 className="text-red-500 font-bold text-5xl">Sorry, page not found</h1>
    </div>
  );
}
