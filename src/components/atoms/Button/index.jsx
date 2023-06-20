import React from "react";

export default function Button(props) {
  const { children, width = "w-full" } = props;
  return (
    <button
      {...props}
      className={`px-8 py-4 bg-[#265AD4] text-white text-lg font-semibold ${width} rounded-lg hover:bg-blue-800`}
    >
      {children}
    </button>
  );
}
