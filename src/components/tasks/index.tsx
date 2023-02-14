import { TaskContext } from "@/pages/taskList";
import { Button } from "antd";
import { userAPI } from "APIs";
import { CreateTaskDto, TaskDto } from "models/tasks";
import { useState, useEffect, useContext } from "react";
import GlobalMOdal from "../modals/globalModal";
import TaskInput from "../taskInput copy";
import VerticalCard2 from "../verticalCard2";
const TasksPage = () => {
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);

  const tmp = useContext(TaskContext);
  console.log("🚀 ~ file: index.tsx:7 ~ TasksPage ~ tmp", tmp, tmp.tasklist);
  const [tasks, setTasks] = useState<any>(tmp.tasklist);
  const createTask = async (data: any) => {
    try {
      const res = await userAPI.createTask(data);
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
      <Button onClick={() => createTask({ title: `${Math.random()}` })}>
        Create task
      </Button>
      <Button onClick={() => getTasks()}>get tasks</Button>
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
              <TaskInput taskList={tasks} createTask={createTask} />
            </GlobalMOdal>
          </>
        )}
      </div>
      {tasks &&
        tasks.map(
          (task: TaskDto) => <VerticalCard2 key={task.id} task={task} />
          // <div key={Math.random()}>{task.title}</div>
        )}
    </>
  );
};

export default TasksPage;
