import React from "react";

export default function index(props) {
  const { children } = props;
  return (
    <label
      {...props}
      className="relative text-gray-400 focus-within:text-gray-600 block w-full"
    >
      {children}
    </label>
  );
}
