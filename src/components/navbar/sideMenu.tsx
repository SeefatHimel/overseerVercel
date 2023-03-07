import { LogoutOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Image, Tooltip } from "antd";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { userAPI } from "APIs";
const SideMenu = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    console.log("logging out");
    const loggedOut = await userAPI.logout();
    if (loggedOut) router.push("/login");
  };
  const SideMenuOption = ({ option, active }: any) => {
    const router = useRouter();
    return (
      <li className="p-5">
        <div
          className={`hover:bg-blue-500 hover:text-white hover:cursor-pointer rounded-full p-1 pt-0 ${
            active ? "bg-blue-500 text-white scale-110" : ""
          }`}
          onClick={() => {
            router.push(option.link);
          }}
        >
          {option.icon}
        </div>
      </li>
    );
  };
  return (
    <div className="bg-blue-700 h-screen flex justify-center items-center">
      <div className="flex h-full w-16 flex-col justify-between">
        <div>
          {" "}
          <div
            className="flex items-center justify-center rounded-md p-4 text-white hover:cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            T23
          </div>
          <div className=" rounded-md text-gray-200">
            <ul>
              {sideMenuOptions?.map((option) => (
                <SideMenuOption
                  key={Math.random()}
                  option={option}
                  active={router.asPath.includes(option.link)}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center pb-5 text-white">
          <div
            className="p-1 hover:scale-110  hover:bg-blue-500 rounded-full hover:cursor-pointer"
            onClick={handleLogOut}
          >
            <AiOutlineLogout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

export const sideMenuOptions = [
  { link: "/taskList", title: "Tasks Page", icon: <UnorderedListOutlined /> },
  // { link: "/dashboard", title: "DashBoard Page" },
  // { link: "/integrations", title: "Integrations Page" },
  // { link: "/onBoarding", title: "OnBoarding Page" },
];
