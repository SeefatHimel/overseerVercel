import Link from "next/link";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <>
      <LoginForm />
      <div className="mx-auto w-max p-2">
        <Link href="/registration">{"Don't have an account? .. Register"}</Link>
      </div>
    </>
  );
};

export default Login;
