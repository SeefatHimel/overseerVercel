import Link from "next/link";
import LoginForm from "../../components/loginForm";

const Login = () => {
  return (
    <div className="pt-32">
      <LoginForm />
      <div className="mx-auto w-max p-2">
        <Link href="/registration">{"Don't have an account? .. Register"}</Link>
      </div>
    </div>
  );
};

export default Login;
