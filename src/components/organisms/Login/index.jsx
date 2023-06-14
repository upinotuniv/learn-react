import React from "react";
import InputForm from "../../molecules";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form className="w-full">
      <InputForm
        htmlFor="email"
        label="Email"
        type="email"
        name="email"
        placeholder="Please enter your email..."
      />
      <InputForm
        htmlFor="password"
        label="Password"
        type="password"
        name="password"
        placeholder="Please enter your password..."
      />
      <Link to="/product">
        <Button text="Login" />
      </Link>
    </form>
  );
}
