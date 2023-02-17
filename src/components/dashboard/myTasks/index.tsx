import { Tabs } from "antd";

const MyTasks = () => {
  const tabs = ["To do", " Comments", "Done", "Delegated"];
  return (
    <div className="flex flex-col gap-4">
      <div> my tasks</div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={"small"}
        items={tabs.map((tab, i) => {
          const id = String(i + 1);
          return {
            label: tab,
            key: id,
            children: `Content of card tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default MyTasks;
