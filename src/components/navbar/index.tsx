import { Avatar, Button } from "antd";

function Navbar() {
  const path = "window.location.pathname";
  const btnText = path === "/login" ? "Register" : "Login";

  return (
    <div className="flex justify-between items-center px-4">
      <div className="text-2xl text-blue-500 py-6">Overseer </div>
      {path === "/login" || path === "/registration" ? (
        <Button
          type="primary"
          danger
          onClick={
            () => {}
            // navigate(`/${path === "/login" ? "registration" : "login"}`)
          }
        >
          {btnText}
        </Button>
      ) : (
        true && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* {user?.picture && <Avatar src={user.picture} alt="N" />} */}
              {/* {user?.name ? user?.name : "no user"} */}
              User
            </div>
            {/* <LogOutButton /> */}
          </div>
        )
      )}
    </div>
  );
}

export default Navbar;
