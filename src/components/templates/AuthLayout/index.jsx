import React from "react";

export default function AuthLayout(props) {
  const { title, desc, children, path = "", footer, text, type } = props;
  return (
    <div className="flex justify-center items-center h-screen w-full gap-y-4">
      <div className="flex justify-center items-center w-full h-full rounded-lg gap-y-8 drop-shadow-lg px-[500px] py-44">
        <div className="flex flex-col justify-center items-center w-full space-y-12 bg-gray-300 p-8 rounded-lg">
          <div className="flex flex-col justify-center items-center w-full gap-y-4">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-lg font-medium">{desc}</p>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            {children}
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-y-2">
            {type === "login" ? (
              <p className="font-semibold text-md">
                Not have account? Register here
              </p>
            ) : (
              <p className="font-semibold text-md">
                Already have account? Login here
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
