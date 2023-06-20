import React from "react";

export default function Input(props) {
  const { type, onChange, name, placeholder } = props;
  return (
    <input
      className="text-md border rounded-lg w-full px-4 py-2 placeholder:text-gray-500 bg-gray-100"
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      id={name}
    />
  );
}
