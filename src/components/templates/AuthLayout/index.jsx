import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function AuthLayout(props) {
  const { title, desc, children, path = "", footer, text } = props;
  return (
    <div className="flex justify-center items-center min-h-screen w-full gap-y-4">
      <div className="flex flex-col justify-center items-center bg-gray-200 p-10 w-[35%] rounded-lg gap-y-8 drop-shadow-lg">
        <div className="flex flex-col justify-center items-center w-full gap-y-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-lg font-medium">{desc}</p>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          {children}
        </div>

        <div className="flex justify-center items-center w-full">
          <p className="font-semibold text-md">
            {footer}
            <Link className="text-blue-500 font-bold underline px-1" to={path}>
              {text}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
