import React from "react";
import AuthLayout from "../templates/AuthenticateLayout";
import Login from "../organisms/Login";

export default function SignIn() {
  return (
    <AuthLayout title="Sign-In" desc="Please Login First" type="login">
      <Login />
    </AuthLayout>
  );
}
