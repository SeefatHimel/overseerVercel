// import { UserOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Link from "next/link";
import RegistrationForm from "./components/registrationForm";

// export async function getAuthLink() {
//   try {
//     const response = await axios.get("http://localhost:3000/getLink");
//     console.log("Auth url ", response);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

const Registration = () => {
  // const handleSubmit = () => {
  //   console.log("submit");
  // };
  const getLink = async () => {
    // const res = await getAuthLink();
    // console.log("$$$$$$$$$$$$$$", res);
    // window.open(res?.data);
  };
  return (
    <div className="w-[500px]">
      <div className="mx-auto">
        <Card title="Credentials" bordered={false}>
          <RegistrationForm />
        </Card>
      </div>
      <div className="mx-auto w-max p-2">
        <Link href="/login">{"Don't have an account? .. Login"}</Link>
      </div>
    </div>
  );
};
export default Registration;
