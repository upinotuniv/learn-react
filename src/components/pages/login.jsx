import { Link } from "react-router-dom";
import FormLoginStudent from "../molecules/Form/FormLogin/Student";
import AuthLayout from "../templates/Auth";

export default function Login() {
  return (
    <AuthLayout
      type="login"
      background="bg-[url('/images/akson-1K8pIbIrhkQ-unsplash.jpg')]"
      title="Login"
      sub="Student"
      footer={
        <>
          <h1 className="text-md font-semibold">Don't have account?</h1>
          <Link
            to="/register"
            className="text-md font-semibold text-blue-500 hover:underline"
          >
            Register here
          </Link>
        </>
      }
    >
      <FormLoginStudent />
    </AuthLayout>
  );
}
