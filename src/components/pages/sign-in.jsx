import React from "react";
import Login from "../organisms/Login";
import AuthLayout from "../templates/AuthLayout";

export default function SignIn() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
