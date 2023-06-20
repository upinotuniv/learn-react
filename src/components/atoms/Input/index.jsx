import React from "react";

export default function Input(props) {
  const { space = "px-14", type = "text" } = props;
  return (
    <input
      {...props}
      type={type}
      className={`${space} py-4 border-2 rounded-lg w-full outline-none focus:ring-0 focus:border-[#265AD4] transition duration-300`}
    />
  );
}
