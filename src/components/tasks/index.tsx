import { TaskContext } from "@/pages/taskList";
import { Button } from "antd";
import { userAPI } from "APIs";
import { useState, useEffect, useContext } from "react";
const TasksPage = () => {
  const tmp = useContext(TaskContext);
  console.log("🚀 ~ file: index.tsx:7 ~ TasksPage ~ tmp", tmp, tmp.tasklist);
  const [tasks, setTasks] = useState<any>(tmp.tasklist);
  const createTask = async () => {
    try {
      const res = await userAPI.createTask({ title: `${Math.random()}` });
      console.log("🚀 ~ file: index.tsx:7 ~ createTask ~ res", res);
      await getTasks();
    } catch (error) {}
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
        tasks.map((task: any) => <div key={Math.random()}>{task.title}</div>)}
    </>
  );
};

export default TasksPage;
