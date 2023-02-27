import { Spin } from "antd";
import { useEffect } from "react";

const IntegrationCallbackPage = () => {
  const sampleData = [
    {
      id: "8594f221-9797-5f78-1fa4-485e198d7cd0",
      name: "Site name 2",
      url: "https://your-domain2.atlassian.net",
      scopes: ["write:jira-work", "read:jira-user"],
      avatarUrl:
        "https://site-admin-avatar-cdn.prod.public.atl-paas.net/avatars/240/koala.png",
    },
    {
      id: "1324a887-45db-1bf4-1e99-ef0ff456d421",
      name: "Site name 1",
      url: "https://your-domain1.atlassian.net",
      scopes: [
        "write:jira-work",
        "read:jira-user",
        "manage:jira-configuration",
      ],
      avatarUrl:
        "https://site-admin-avatar-cdn.prod.public.atl-paas.net/avatars/240/flag.png",
    },
  ];
  // useEffect(() => {
  //   if(sampleData)
  //   {

  //   }
  // }, []);
  return (
    <>
      {sampleData ? (
        <>
        
        </>
      ) : (
        <div className="flex justify-center w-full p-40">
          <Spin tip="Loading" size="large" className="scale-150"></Spin>
        </div>
      )}
    </>
  );
};

export default IntegrationCallbackPage;
