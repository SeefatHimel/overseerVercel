import ImportCard from "@/components/importSection/importCard";
import { Button } from "antd";
import { userAPI } from "APIs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import IntegratedServices from "./imported";
import ImportSelect from "./importSelect";

const ImportSection = ({ integrations }: any) => {
  const [integratedTypes, setIntegratedTypes] = useState([]);

  const data = [
    {
      title: "Jira Software",
      type: "JIRA",
      logo: "jira.png",
    },

    {
      title: "Trello",
      type: "Trello",
      logo: "trello.png",
      full: true,
    },
  ];
  const handleOnclick = async () => {
    try {
      const response = await userAPI.getJiraLink();
      console.log(
        "🚀 ~ file: index.tsx:26 ~ handleOnclick ~ response:",
        response
      );
      window.open(response, "_self");
    } catch (error) {}
  };
  useEffect(() => {
    if (integrations) {
      const tmp: string[] = [];
      integrations.forEach((i: any) => tmp.push(i.type));
      setIntegratedTypes(tmp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full flex flex-col gap-2">
      <ImportSelect {...{ data }} />

      <IntegratedServices {...{ data }} />
      <div className="flex justify-end">
        <Button type="link">Skip ...</Button>{" "}
      </div>
      <Link
        href={"http://ec2-54-172-94-212.compute-1.amazonaws.com:3000/auth/jira"}
      >
        jira amazon
      </Link>
      <Button onClick={() => handleOnclick()}>jira link</Button>
    </div>
  );
};

export default ImportSection;
