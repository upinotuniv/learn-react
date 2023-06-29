import FormLoginAdmin from "../molecules/Form/FormLogin/Admin";
import AuthLayout from "../templates/Auth";

export default function Login() {
  return (
    <AuthLayout
      type="login"
      background="bg-[url('/images/mailchimp-04X1Yp9hNH8-unsplash.jpg')]"
      title="Login"
      sub="Administration"
      footer={
        <h1 className="text-md font-semibold">© Copyright Educademy 2023</h1>
      }
    >
      <FormLoginAdmin />
    </AuthLayout>
  );
}
