import React from "react";
import AuthLayout from "../templates/AuthLayout";
import Login from "../organisms/Login";

export default function SignIn() {
  return (
    <AuthLayout title="Sign-In" desc="Please Login" type="login">
      <Login />
    </AuthLayout>
  );
}
