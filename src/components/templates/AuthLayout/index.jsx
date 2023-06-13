import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function AuthLayout(props) {
  const { title, desc, children, path = "", footer, text, type } = props;
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

        <div className="flex flex-col justify-center items-center w-full gap-y-2">
          {/* cara pertama untuk melakukan kondisional render */}
          {/* <p className="font-semibold text-md">
            {type === "login" ? "Not have account?" : "Already have account?"}
            {type === "login" && (
              <Link
                to="/register"
                className="text-red-500 font-bold underline px-1"
              >
                Register here
              </Link>
            )}
            {type === "register" && (
              <Link to="/" className="text-red-500 font-bold underline px-1">
                Login here
              </Link>
            )}
          </p> */}

          {/* cara kedua untuk melakukan kondisional render */}
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

          {/* cara ketiga untuk melakukan kondisional render */}
          {/* <Navigate type={type} /> */}
        </div>
      </div>
    </div>
  );
}

function Navigate(props) {
  const { type } = props;
  if (type === "login") {
    return (
      <p className="font-semibold text-md">
        Not have account?
        <Link
          to="/register"
          className="text-green-500 font-bold underline px-1"
        >
          Register here
        </Link>
      </p>
    );
  } else {
    return (
      <p className="font-semibold text-md">
        Already have account?
        <Link to="/" className="text-green-500 font-bold underline px-1">
          Login here
        </Link>
      </p>
    );
  }
}
