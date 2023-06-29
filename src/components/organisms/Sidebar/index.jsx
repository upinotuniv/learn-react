import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ type }) {
  return (
    <>
      {type === "student" ? (
        <div className="flex flex-col w-full bg-white shadow-lg">
          <div className="flex w-full px-4 py-8 space-x-2">
            <h1 className="text-[24px] font-bold uppercase">EduCademy</h1>
          </div>
          <div className="flex flex-col w-full h-[70%] p-4 space-y-4">
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Student Data
            </Link>
            <Link
              to="/math-class"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Mathematics
            </Link>
            <Link
              to="/science-class"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Science
            </Link>
            <Link
              to="/social-class"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Social
            </Link>
            <Link
              to="/literature-class"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Literature
            </Link>
            <Link
              to="/martial-art-class"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Martial Art
            </Link>
            <Link
              to="/dance-class"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Dance
            </Link>
          </div>
          <div className="flex justify-center items-center w-full px-8 pt-16">
            <h1 className="text-xs font-semibold text-muted">
              © Copyright 2023 Educademy
            </h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full bg-white shadow-lg">
          <div className="flex w-full px-4 py-8 space-x-2">
            <h1 className="text-[24px] font-bold uppercase">EduCademy</h1>
          </div>
          <div className="flex flex-col w-full h-[70%] p-4 space-y-4">
            <Link
              to="/dashboard-admin"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Student Data
            </Link>
            <Link
              to="#"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Mentor
            </Link>
            <Link
              to="#"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Scores
            </Link>
            <Link
              href="#"
              className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
            >
              Schedule
            </Link>
          </div>
          <div className="flex justify-center items-center w-full px-8 pt-16">
            <h1 className="text-xs font-semibold text-muted">
              © Copyright 2023 Educademy
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
