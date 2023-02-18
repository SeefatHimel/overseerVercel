import { GetCookie } from "@/sevices/cookie.service";
import { DoubleRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useState } from "react";
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
      <Navbar />
      <div className="flex">
        {!path.includes("/login") && !path.includes("/register") && (
          <>
            <div
              className={`duration-500  ${showSideBar ? "pr-48" : "pr-0"} `}
              style={{ height: "calc(100vh - 80px)" }}
            >
              <SideBar
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
              />
            </div>
            <div
              className={`fixed left-0 p-4 hover:text-green-500  ${
                !showSideBar ? "delay-500 scale-x-100" : "scale-x-0 "
              } `}
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <DoubleRightOutlined />
            </div>
          </>
        )}
        <div
          className="flex flex-col w-full py-4 mt-20 overflow-y-auto"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div
            className={` w-full pt-2 px-8 bg-white ${
              !path.includes("/login") && !path.includes("/register")
                ? "pl-8 "
                : "mx-auto flex flex-col"
            } `}
            style={{ height: "calc(100vh - 80px)" }}
          >
            {children}
          </div>
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
