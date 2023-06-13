import React from "react";

export default function Button(props) {
  const { text, children } = props;
  return (
    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg w-full">
      {children || text}
    </button>
  );
}
