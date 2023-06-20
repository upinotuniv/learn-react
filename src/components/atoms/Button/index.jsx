import React from "react";

export default function Button(props) {
  const { children } = props;
  return (
    <button
      {...props}
      className="bg-[#93DAF0] px-4 py-2 rounded-lg text-lg font-bold text-white focus:outline-none shadow-lg w-full"
    >
      {children}
    </button>
  );
}
