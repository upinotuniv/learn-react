import React, { useEffect, useRef, useState } from "react";
import InputForm from "../../molecules/FormInput";
import Button from "../../atoms/Button";
import { login } from "../../../service/auth.service";

export default function Login() {
  const [error, setError] = useState("" || false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        console.log("login", res);
        setError(res.response.data);
      }
    });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleUsernamePressed = () => {
    if (event.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("username", e.target.username.value);
  //   localStorage.setItem("password", e.target.password.value);
  //   window.location.href = "/product";
  // };

  return (
    <>
      {error && (
        <div className="flex justify-center items-center absolute inset-0 bg-black/80 z-20 w-full">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg">
            <div className="flex justify-start items-center w-full border-b border-gray-500 p-4">
              <h1 className="text-xl font-bold">Notification</h1>
            </div>
            <div className="flex justify-center items-center w-full pt-4 px-8">
              <p className="text-2xl font-medium text-red-500 w-72">{error}</p>
            </div>
            <div className="flex justify-between items-center w-full px-16 py-4 gap-x-12">
              <Button onClick={() => setError(false)}>OK</Button>
            </div>
          </div>
        </div>
      )}
      <form className="w-full" onSubmit={handleLogin}>
        <InputForm
          ref={usernameRef}
          htmlFor="username"
          label="Username"
          type="text"
          name="username"
          placeholder="Please enter your email..."
          onKeyPress={handleUsernamePressed}
        />
        <InputForm
          ref={passwordRef}
          htmlFor="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Please enter your password..."
        />
        <Button text="Login" />
      </form>
    </>
  );
}
