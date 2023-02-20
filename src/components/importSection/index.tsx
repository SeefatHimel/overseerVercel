import ImportCard from "@/components/importSection/importCard";
import { Button, Card } from "antd";
import { userAPI } from "APIs";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ImportSection = () => {
  const [selected, setSelected] = useState("");

  const data = [
    {
      title: "Jira Software",
      logo: "jira.png",
    },

    {
      title: "Trello",
      logo: "trello.png",
      full: true,
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="mx-auto">Select Source of Import</div>
      <div className="p-4 border-2 rounded flex gap-4">
        {data.map((d) => (
          <ImportCard
            key={Math.random()}
            data={d}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
        {/* <ImportCard data={jira} selected={selected} setSelected={setSelected} /> */}
      </div>
      <Button
        className="mx-auto w-52"
        onClick={async () => {
          if (selected === "Jira Software") {
            const res = await userAPI.authJira();
            console.log("🚀 ~ file: index.tsx:41 ~ onClick={ ~ res:", res);
          } else toast.error(`Sorry ${selected} import is not supported`);
        }}
      >
        {selected.length > 0 ? "Import from " + selected : "Select"}{" "}
      </Button>
      <div className="flex justify-end">
        <Button type="link">Skip ...</Button>{" "}
      </div>
    </div>
  );
};

export default ImportSection;
