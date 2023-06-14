import React from "react";

export default function Input(props) {
  const { type = "text" } = props;
  return (
    <input
      {...props}
      type={type}
      className="transition duration-300 w-full focus:outline-none bg-gray-200 focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg my-1 py-2 px-4"
    />
  );
}
