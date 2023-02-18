import { GetCookie } from "@/sevices/cookie.service";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../navbar";
import SideBar from "../navbar/sideBar";

const CustomLayout = ({ children }: any) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [access_token, setAccessToken] = useState(GetCookie("access_token"));
  console.log(
    "🚀 ~ file: layout.tsx:11 ~ CustomLayout ~ access_token",
    access_token
  );
  const path = router.asPath;

  return (
    <>
      <div className="flex">
        {!path.includes("/login") && !path.includes("/register") && (
          <>
            <div
              className={`duration-500  ${showSideBar ? "pr-48" : "pr-8"} `}
              style={{ height: "calc(100vh - 80px)" }}
            >
              <SideBar
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
              />
            </div>
            <div
              className={`absolute left-0 p-4 hover:text-green-500  ${
                !showSideBar ? "delay-500 scale-x-100" : "scale-x-0 "
              } `}
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <DoubleRightOutlined />
            </div>
          </>
        )}
        <div
          className={` w-full pt-2 px-8 ${
            !path.includes("/login") && !path.includes("/register")
              ? "pl-8 "
              : "mx-auto flex flex-col"
          } `}
        >
          <Navbar />
          {children}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default CustomLayout;
