import React from "react";
import AuthLayout from "../templates/AuthLayout";
import Register from "../organisms/Register";

export default function SignUp() {
  return (
    <AuthLayout
      title="Sign-Up"
      desc="Please Register First"
      footer="already have an account?"
      text="Login here"
      path="/"
    >
      <Register />
    </AuthLayout>
  );
}
