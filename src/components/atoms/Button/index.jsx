import React from "react";

export default function Button(props) {
  const { text, children, color = "bg-blue-500" } = props;
  return (
    <button
      className={`px-4 py-2 ${color} text-white font-semibold rounded-lg w-full`}
      {...props}
    >
      {children || text}
    </button>
  );
}
