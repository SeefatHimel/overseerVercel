import { Image, Modal, Spin, Tooltip } from "antd";
import Link from "next/link";
import { useState } from "react";
import GlobalMOdal from "../modals/globalModal";

const SocialLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center w-full">
      <div>Or login with ..</div>
      <div className="mt-4" onClick={() => setIsModalOpen(true)}>
        <Tooltip placement="bottom" title={"Login with Google"} color="purple">
          <Link href={"http://localhost:3000/auth/google"}>
            <div className="flex flex-col bg-red-100 grayscale duration-1000 rounded-xl hover:grayscale-0 p-4">
              <Image
                height={20}
                width={20}
                preview={false}
                src="/assets/images/googleIcon.png"
                alt="Error"
              />
            </div>
          </Link>
        </Tooltip>
      </div>
      <Modal
        // title="Logging In"
        open={isModalOpen}
        footer={null}
        closable={false}
        centered
        className="bg-transparent w-20"
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex flex-col gap-4 items-center justify-center h-40">
          <Spin size="large" />
          <h1>Logging In</h1>
        </div>
      </Modal>
    </div>
  );
};

export default SocialLogin;
