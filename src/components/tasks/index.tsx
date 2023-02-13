import { Button } from "antd";
import { userAPI } from "APIs";
import { useState, useEffect } from "react";
const TasksPage = () => {
  const [tasks, setTasks] = useState<any>();
  const createTask = async () => {
    const res = await userAPI.createTask({ title: `${Math.random()}` });

    console.log("🚀 ~ file: index.tsx:7 ~ createTask ~ res", res);
  };
  const getTasks = async () => {
    const res = await userAPI.getTasks();
    res && setTasks(res);
    console.log("🚀 ~ file: index.tsx:7 ~ createTask ~ res", res);
  };
  useEffect(() => {}, [tasks]);
  return (
    <>
      tasks
      <Button onClick={() => createTask()}>Create task</Button>
      <Button onClick={() => getTasks()}>get tasks</Button>
      {tasks &&
        tasks?.map((task: any) => <div key={Math.random()}>{task.title}</div>)}
    </>
  );
};

export default TasksPage;
