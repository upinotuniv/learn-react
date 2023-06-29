import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../atoms/Icons";

export default function Navbar({ type, initial, user, id }) {
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [showProfile, setShowProfiile] = useState(false);

  return (
    <>
      {type === "admin" ? (
        <div className="flex justify-center w-full h-[15%] p-4">
          <div className="flex flex-col justify-center items-end w-full bg-white rounded-xl shadow-lg px-8">
            <div className="flex flex-col justify-center items-center space-x-2">
              <div className="flex justify-center items-center w-full gap-2">
                <div className="px-4 py-2 bg-gray-700 rounded-full">
                  <div className="inline-flex justify-center items-center">
                    <h1 className="text-white font-semibold">{initial}</h1>
                  </div>
                </div>
                <button
                  className="focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => setShowLogoutButton(!showLogoutButton)}
                >
                  <h1 className="text-gray-700 font-semibold text-lg">
                    {user}
                  </h1>
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* <!-- Dropdown menu --> */}
              {showLogoutButton && (
                <button
                  className="bg-white border rounded-md text-md font-semibold text-gray-700 hover:bg-red-500 hover:text-white shadow w-44 dark:bg-gray-700 absolute top-20 transition duration-500 py-2"
                  onClick={() => {
                    localStorage.removeItem("adminToken");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      ) : type === "student" ? (
        <div className="flex justify-center w-full h-[15%] p-4">
          <div className="flex flex-col justify-center items-end w-full bg-white rounded-xl shadow-lg px-8">
            <div className="flex flex-col justify-center items-center space-x-2">
              <div className="flex justify-center items-center w-full gap-2">
                <div className="px-4 py-2 bg-gray-700 rounded-full">
                  <div className="inline-flex justify-center items-center">
                    <h1 className="text-white font-semibold">{initial}</h1>
                  </div>
                </div>
                <button
                  className="focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => setShowProfiile(!showProfile)}
                >
                  <h1 className="text-gray-700 font-semibold text-lg">
                    {user}
                  </h1>
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* <!-- Dropdown menu --> */}
              {showProfile && (
                <div className="flex flex-col justify-center items-center absolute top-20">
                  <button
                    className="bg-white border rounded-md text-md font-semibold text-gray-700 hover:bg-gray-500 hover:text-white shadow w-44 dark:bg-gray-700 transition duration-500 py-2"
                    onClick={() => {
                      window.location.href = `/profile/${id}`;
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="bg-white border rounded-md text-md font-semibold text-gray-700 hover:bg-red-500 hover:text-white shadow w-44 dark:bg-gray-700 transition duration-500 py-2"
                    onClick={() => {
                      localStorage.removeItem("studentToken");
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full p-8 bg-gray-700 shadow-md">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-black uppercase border-l-4 px-1 border-white text-white">
              EduCademy
            </h1>
          </div>

          <div className="flex justify-center items-center gap-x-6">
            <button
              onClick={() => (window.location.href = "/register")}
              className="text-lg font-semibold px-4 pb-1 text-white border-gray-500 focus:border-b-2 transition duration-500"
            >
              Register
            </button>
            <div className="flex justify-center items-center">
              <button
                className="text-lg font-semibold px-4 pb-1 text-white border-gray-500 focus:border-b-2 transition duration-500"
                onClick={() => {
                  setShow(!show);
                  setCollapse(!collapse);
                }}
              >
                Login
              </button>
              <div
                className={
                  collapse
                    ? "rotate-180 transition duration-100"
                    : "rotate-0 transition duration-100"
                }
              >
                <Icons.Rectangle />
              </div>
              {show && (
                <div className="flex flex-col justify-center items-center w-36 absolute top-20 right-6 z-20 gap-y-4 bg-white rounded-md drop-shadow-lg p-4">
                  <Link
                    className="text-md font-semibold hover:font-normal"
                    to="/login"
                  >
                    Student
                  </Link>
                  <Link
                    className="text-md font-semibold hover:font-normal"
                    to="/login-admin"
                  >
                    Admin
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
