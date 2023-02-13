import TaskInput from "@/components/taskInput";
import { useEffect, useState } from "react";
import VerticalCard from "../../components/verticalCard";
import { getLocalStorage } from "@/storage/storage";
import { Button } from "antd";
import TasksPage from "@/components/tasks";
import GlobalMOdal from "../../components/modals/globalModal";
const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  // const [addTask, setAddTask] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);

  const tasks = getLocalStorage("TaskList");
  useEffect(() => {
    // console.log(tasks, taskList, tasks !== taskList);

    if (tasks?.length !== taskList?.length) setTaskList(tasks);
  }, [taskList]);
  return (
    <div>
      <div className="w-96 mx-auto mt-20">
        <TasksPage />
        <div className="py-2">
          {!viewModalOpen && (
            <Button
              onClick={() => {
                // setAddTask(true);
                setViewModalOpen(true);
              }}
            >
              Add Task
            </Button>
          )}
          {viewModalOpen && (
            <>
              {/* <Button className="mb-2" onClick={() => setAddTask(false)}>
                Cancel
              </Button> */}
              <GlobalMOdal
                isModalOpen={viewModalOpen}
                setIsModalOpen={setViewModalOpen}
              >
                <TaskInput taskList={taskList} setTaskList={setTaskList} />
              </GlobalMOdal>
            </>
          )}
        </div>
        {/* <VerticalCard /> */}
        {taskList?.map((task) => (
          <VerticalCard key={Math.random()} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
