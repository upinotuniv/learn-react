import React from "react";
import InputForm from "../../molecules/FormInput";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form className="w-full px-8">
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
      <div className="w-full my-6">
        <Link to="/catalog">
          <Button>Login</Button>
        </Link>
      </div>
    </form>
  );
}
