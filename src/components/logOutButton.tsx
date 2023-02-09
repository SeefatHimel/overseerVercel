import { RemoveAllCookies, RemoveCookie } from "@/sevices/cookie.service";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";
// import { LogOut } from "../APIs";

const LogOutButton = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    console.log("logging out");
    // RemoveAllCookies();
    router.push("/login");
    RemoveCookie("access_token");
    // if (await LogOut()) {

    // }
  };
  return (
    <Button type="primary" danger onClick={() => handleLogOut()}>
      <LogoutOutlined /> Log out
    </Button>
  );
};

export default LogOutButton;
