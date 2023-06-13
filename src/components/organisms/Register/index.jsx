import React from "react";
import InputForm from "../../molecules";
import Button from "../../atoms/Button";

export default function Register() {
  return (
    <form className="w-full">
      <InputForm
        htmlFor="username"
        label="Username"
        type="text"
        name="username"
        placeholder="Please enter your username..."
      />
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
      <InputForm
        htmlFor="confirmPassword"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Please enter confirm password..."
      />
      <Button text="Register" />
    </form>
  );
}
