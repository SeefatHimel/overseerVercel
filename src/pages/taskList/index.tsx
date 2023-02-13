import TaskInput from "@/components/taskInput";
import { useEffect, useState } from "react";
import VerticalCard from "../../components/verticalCard";
import { getLocalStorage } from "@/storage/storage";
import { Button } from "antd";
import TasksPage from "@/components/tasks";
const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [addTask, setAddTask] = useState(false);

  const tasks = getLocalStorage("TaskList");
  useEffect(() => {
    // console.log(tasks, taskList, tasks !== taskList);

    if (tasks?.length !== taskList?.length) setTaskList(tasks);
  }, [taskList]);
  return (
    <>
      <div className="w-96 mx-auto mt-20">
        <TasksPage />
        <div className="py-2">
          {!addTask && (
            <Button onClick={() => setAddTask(true)}>Add Task</Button>
          )}
          {addTask && (
            <>
              <Button className="mb-2" onClick={() => setAddTask(false)}>
                Cancel
              </Button>
              <TaskInput taskList={taskList} setTaskList={setTaskList} />
            </>
          )}
        </div>
        {/* <VerticalCard /> */}
        {taskList?.map((task) => (
          <VerticalCard key={Math.random()} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
