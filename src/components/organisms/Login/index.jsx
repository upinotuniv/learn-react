import React, { useEffect, useRef } from "react";
import InputForm from "../../molecules/FormInput";
import Button from "../../atoms/Button";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleEmailPressed = () => {
    if (event.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <InputForm
        ref={emailRef}
        htmlFor="email"
        label="Email"
        type="email"
        name="email"
        placeholder="Please enter your email..."
        onKeyPress={handleEmailPressed}
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
  );
}
