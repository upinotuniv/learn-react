import React, { useState } from "react";
import Input from "../../../../atoms/Input";
import Label from "../../../../atoms/Label";
import Button from "../../../../atoms/Button";
import axios from "axios";

export default function FormLoginStudent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      if (email === "admin@gmail.com") {
        window.alert("Invalid User");
      } else {
        const response = await axios.post("http://localhost:5000/sign-in", {
          email: email,
          password: password,
        });

        localStorage.setItem("studentToken", response.data.studentAccessToken);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col space-y-8 w-full" onSubmit={Auth}>
      <div className="flex flex-col justify-center w-full space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center w-full space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="*****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
