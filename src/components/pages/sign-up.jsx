import React from "react";
import AuthLayout from "../templates/AuthLayout";
import Register from "../organisms/Register";

export default function SignUp() {
  return (
    <AuthLayout title="Sign-Up" desc="Please Register First" type="register">
      <Register />
    </AuthLayout>
  );
}
