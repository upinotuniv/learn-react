import React from "react";

export default function Button(props) {
  const { children, color = "bg-gray-700" } = props;
  return (
    <button
      {...props}
      className={`flex justify-center items-center ${color} hover:bg-gray-800 rounded-md w-full py-2 text-gray-50 text-md font-bold hover:shadow-md`}
    >
      {children}
    </button>
  );
}
