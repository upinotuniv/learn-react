import React, { useState } from "react";
import FormInput from "../../molecules/FormInput";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product-redmi-10";
  };
  return (
    <div className="flex flex-col justify-center items-center w-full bg-secondary rounded-xl shadow-2xl py-8">
      <div className="flex flex-col justify-center items-center w-full my-8 gap-y-2">
        <h1 className="text-5xl font-bold">Login</h1>
        <p className="text-lg font-semibold text-gray-700">
          Please login first
        </p>
      </div>
      <form
        className="flex flex-col w-full space-y-4 px-16 py-8"
        onSubmit={handleSubmit}
      >
        <FormInput
          text="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <FormInput
          text="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div className="flex justify-start items-center space-x-2 w-full">
          <Input type="checkbox" />
          <Label weight="font-normal" size="text-md">
            Remember me
          </Label>
        </div>
        <div className="flex flex-col justify-start w-full">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
}
