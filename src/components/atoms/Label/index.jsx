import React from "react";

export default function Label(props) {
  const { htmlFor, children, label } = props;
  return (
    <label
      className="block text-sm font-medium text-gray-700 mb-1"
      htmlFor={htmlFor}
    >
      {children || label}
    </label>
  );
}
