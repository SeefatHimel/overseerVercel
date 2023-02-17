import { Button } from "antd";

type Props = {
  showSideBar: boolean;
  setShowSideBar: Function;
};
const SideBar = ({ showSideBar, setShowSideBar }: Props) => {
  return (
    <div
      className={`fixed duration-500 origin-left w-48 ${
        showSideBar ? " delay-100 scale-x-100" : " scale-x-0"
      }  overflow-hidden z-100 border-r-2  border-red-500`}
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="relative">
        <Button
          className="absolute right-0"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          Close
        </Button>
      </div>

      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
      <div>Sidebar</div>
    </div>
  );
};

export default SideBar;
