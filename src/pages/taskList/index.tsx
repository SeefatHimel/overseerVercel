import TaskInput from "@/components/taskInput";
import { useEffect, useState } from "react";
import VerticalCard from "../../components/verticalCard";
import { getLocalStorage } from "@/storage/storage";
import { Button } from "antd";
const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    const tasks = getLocalStorage("TaskList");
    tasks !== taskList && setTaskList(tasks);
  }, [taskList]);
  return (
    <>
      <div className="w-96 mx-auto mt-52">
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
        {taskList?.map((task, index) => (
          <VerticalCard key={index} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
