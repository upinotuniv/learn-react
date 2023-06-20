import React from "react";

export default function FormInput(props) {
  const { icon, space = "px-14", type = "text" } = props;
  return (
    <label
      {...props}
      className="relative text-gray-400 focus-within:text-gray-600 block w-full"
    >
      {icon}
      <input
        type={type}
        {...props}
        className={`${space} py-4 border-2 rounded-lg w-full outline-none focus:ring-0 focus:border-[#265AD4] transition duration-300`}
      />
    </label>
  );
}
