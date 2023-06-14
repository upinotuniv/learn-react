import React from "react";
import Input from "../../atoms/Input";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { search } = props;
  return (
    <div className="flex justify-between items-center w-full py-2 bg-gray-900 border-b-2 border-white">
      <div className="w-1/2 px-8">
        <Link to="/catalog">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex justify-end items-center w-1/2 px-8">{search}</div>
    </div>
  );
}
