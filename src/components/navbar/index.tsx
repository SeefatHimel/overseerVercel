import { GetCookie } from "@/sevices/cookie.service";
import { Avatar, Button } from "antd";
import LogOutButton from "../logOutButton";
import { useRouter } from "next/router";
import { getLocalStorage } from "@/storage/storage";
import { useEffect, useState } from "react";
import { LoginResponseDto } from "models/auth";

function Navbar() {
  const [userDetails, setUserDetails] = useState<LoginResponseDto>();
  const router = useRouter();
  const path = router.asPath;
  const btnText = path === "/login" ? "Register" : "Login";
  const access_token = GetCookie("access_token");
  useEffect(() => {
    const tmp = getLocalStorage("userDetails");
    if (!userDetails && tmp) setUserDetails(tmp);
  }, [userDetails]);
  return (
    <div className=" fixed flex h-20 w-full justify-between items-center px-4 shadow-lg mb-2">
      <div
        className="text-2xl text-blue-500 hover:text-green-500 pl-8 py-6"
        onClick={() => {
          router.push("/");
        }}
      >
        Overseer
      </div>
      {path === "/login" || path === "/registration" ? (
        <Button
          type="primary"
          danger
          onClick={() => {
            router.push(`/${path === "/login" ? "registration" : "login"}`);
          }}
        >
          {btnText}
        </Button>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* {user?.picture && <Avatar src={user.picture} alt="N" />} */}
            {userDetails?.firstName}
          </div>
          <LogOutButton />
        </div>
      )}
    </div>
  );
}

export default Navbar;
