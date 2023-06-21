import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      className="text-md border rounded-lg w-full px-4 py-2 placeholder:text-gray-500 bg-gray-100 outline-none focus:ring-0 focus:outline-blue-700"
      {...props}
      ref={ref}
    />
  );
});
export default Input;
