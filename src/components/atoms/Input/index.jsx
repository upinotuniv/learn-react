import React from "react";

export default function Input(props) {
  const { type = "text", width = "full" } = props;
  return (
    <input
      {...props}
      type={type}
      className={`transition duration-300 ${width} focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-400 border-gray-300 shadow-sm rounded-lg my-2 py-2 px-4`}
    />
  );
}
