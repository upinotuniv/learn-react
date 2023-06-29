import React from "react";

export default function Label(props) {
  const { children } = props;
  return (
    <label
      {...props}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
}
