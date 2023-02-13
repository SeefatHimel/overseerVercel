import { Button } from "antd";
import { userAPI } from "APIs";
const TasksPage = () => {
  const createTask = async () => {
    const res = await userAPI.createTask({ title: `${Math.random()}` });

    console.log("🚀 ~ file: index.tsx:7 ~ createTask ~ res", res);
  };

  return (
    <>
      tasks
      <Button onClick={() => createTask()}>Create task</Button>
    </>
  );
};

export default TasksPage;
