import React from "react";
import AuthLayout from "../templates/AuthenticateLayout";
import Register from "../organisms/Register";

export default function SignIn() {
  return (
    <AuthLayout title="Sign-Up" desc="Sign Up to Login" type="register">
      <Register />
    </AuthLayout>
  );
}
