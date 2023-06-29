import React from "react";

export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full transition duration-500 py-2 px-6 outline-none bg-gray-200 rounded-lg focus:ring focus:ring-gray-700"
    />
  );
}
