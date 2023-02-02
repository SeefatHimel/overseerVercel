import TaskInput from "@/components/taskInput";
import { useEffect, useState } from "react";
import VerticalCard from "../../components/verticalCard";
import { getLocalStorage } from "@/storage/storage";
import { Button } from "antd";
const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [addTask, setAddTask] = useState(false);

  const tasks = getLocalStorage("TaskList");
  // useEffect(() => {
  //   console.log(tasks, taskList, tasks !== taskList);

  //   if (tasks?.length !== taskList?.length) setTaskList(tasks);
  // }, []);
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
        {tasks &&
          tasks?.map((task: any, index: any) => (
            <VerticalCard key={index} task={task} />
          ))}
        {/* {taskList?.map((task, index) => (
          <VerticalCard key={index} task={task} />
        ))} */}
      </div>
    </>
  );
};

export default TaskList;
