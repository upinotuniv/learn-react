import React from "react";
import { Link } from "react-router-dom";

export default function AuthLayout(props) {
  const { title, desc, children, type } = props;
  return (
    <div className="flex justify-center items-center w-full h-fit gap-y-4 bg-[url('/images/hermes-rivera-Ww8eQWjMJWk-unsplash.jpg')] bg-cover">
      <div className="w-full h-full absolute backdrop-blur-sm bg-black/50"></div>
      <div className="flex flex-1 flex-col p-16 gap-y-8">
        <div className="w-full space-y-4 bg-white flex flex-col justify-center items-center px-12 py-10 rounded-lg drop-shadow-lg">
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
                Not have account?
                <Link
                  to="/register"
                  className="text-blue-500 font-bold underline px-1"
                >
                  Register here
                </Link>
              </p>
            ) : (
              <p className="font-semibold text-md">
                Already have account?
                <Link to="/" className="text-blue-500 font-bold underline px-1">
                  Login here
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-1 px-24 justify-center items-center relative h-screen">
        <h1 className="text-6xl font-bold text-white">
          START WITH FOOD, RUN WITH PASSION
        </h1>
      </div>
    </div>
  );
}
