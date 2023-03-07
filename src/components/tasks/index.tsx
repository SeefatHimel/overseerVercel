import { SyncOutlined } from "@ant-design/icons";
import { Button, Empty, message, Spin } from "antd";
import { userAPI } from "APIs";
import { TaskDto } from "models/tasks";
import { useState, useEffect, useContext, createContext } from "react";
import GlobalModal from "../modals/globalModal";
import TaskInput from "../taskInput copy";
import SideCard from "./components/sideCard";
import VerticalCard from "./components/verticalCard";

export const TaskContext = createContext<any>({ taskList: [] });
const TasksPage = ({ allTask }: any) => {
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskDto | null>(null);
  const [tasklist, setTasklist] = useState(allTask);

  const createTask = async (data: any) => {
    setLoading(true);
    try {
      const res = await userAPI.createTask(data);
      message.success("Task created successfully");
      setTasks((tasks) => [res, ...tasks]);
      setViewModalOpen(false);
    } catch (error) {
      message.error("Error creating task");
      setViewModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (taskId: any) => {
    setLoading(true);
    try {
      await userAPI.deleteTask(taskId);
      message.success("Task deleted successfully");
      setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      message.error("Error deleting task");
    } finally {
      setLoading(false);
    }
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const res = await userAPI.getTasks();
      setTasks(res || []);
    } catch (error) {
      message.error("Error getting tasks");
    } finally {
      setLoading(false);
    }
  };
  const syncTasks = async () => {
    setLoading(true);
    try {
      const res = await userAPI.syncTasks();
      setTasks(res || []);
      message.success("Sync Successful");
    } catch (error) {
      message.error("Error syncing tasks");
    } finally {
      setLoading(false);
    }
    setSyncing(false);
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {}, [tasks]);
  return (
    <TaskContext.Provider value={{ tasklist: tasklist }}>
      <div className="mr-8 " style={{ height: "calc(100vh - 100px)" }}>
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Tasks</h2>
          <div className="flex gap-1">
            <Button onClick={() => setViewModalOpen(true)}>Add Task</Button>
            <Button
              className={`flex justify-center items-center ${
                syncing ? "text-green-500 border-green-500" : ""
              }`}
              onClick={async () => {
                setSyncing(true);
                await syncTasks();
              }}
            >
              <SyncOutlined spin={syncing} />
            </Button>
          </div>
        </div>

        <Spin spinning={loading}>
          {tasks.length ? (
            <div
              className="grid grid-cols-2  gap-4 "
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <div
                className="flex flex-col  gap-4 overflow-y-auto border-r-2 pr-2"
                style={{ maxHeight: "calc(100vh - 100px)" }}
              >
                {tasks.map((task) => (
                  <VerticalCard
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                  />
                ))}
              </div>
              <div>
                {selectedTask ? (
                  <SideCard
                    task={
                      tasks?.filter((task) => task.id === selectedTask?.id)[0]
                    }
                  />
                ) : (
                  <Empty description="No task selected" />
                )}
              </div>
            </div>
          ) : (
            <Empty description="No tasks" />
          )}
        </Spin>

        <GlobalModal
          isModalOpen={viewModalOpen}
          setIsModalOpen={setViewModalOpen}
        >
          <TaskInput taskList={tasklist} createTask={createTask} />
        </GlobalModal>
      </div>
    </TaskContext.Provider>
  );
};

export default TasksPage;
