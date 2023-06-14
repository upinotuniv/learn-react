import React from "react";

export default function Button(props) {
  const { children, color = "bg-blue-500" } = props;
  return (
    <button
      {...props}
      className={`flex justify-center items-center px-4 py-2 w-full ${color} text-md font-semibold rounded-lg text-white`}
    >
      {children}
    </button>
  );
}
