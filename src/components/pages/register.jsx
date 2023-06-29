import { Link } from "react-router-dom";
import FormRegister from "../molecules/Form/FormRegister";
import AuthLayout from "../templates/Auth";

export default function Register() {
  return (
    <AuthLayout
      background="bg-[url('/images/akson-1K8pIbIrhkQ-unsplash.jpg')]"
      title="Register"
      sub="Student"
      footer={
        <>
          <h1 className="text-md font-semibold">Already have account?</h1>
          <Link
            to="/login"
            className="text-md font-semibold text-blue-500 hover:underline"
          >
            Login here
          </Link>
        </>
      }
    >
      <FormRegister />
    </AuthLayout>
  );
}
