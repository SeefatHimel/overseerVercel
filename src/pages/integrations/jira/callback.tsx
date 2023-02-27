import { Spin } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CallbackPage = () => {
  const router = useRouter();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      router.push("/home");
    }
  }, [router, status]);
  return (
    <>
      <div className="flex justify-center w-full p-40">
        <Spin tip="Integrating Jira" size="large" className="scale-150"></Spin>
      </div>
    </>
  );
};

export default CallbackPage;
