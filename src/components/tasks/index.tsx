import { Button, Empty, Spin, message } from "antd";
import { createContext, useEffect, useState } from "react";

import GlobalModal from "../modals/globalModal";
import SessionStartWarning from "./components/warning";
import SideCard from "./components/sideCard";
import { SyncOutlined } from "@ant-design/icons";
import { TaskDto } from "models/tasks";
import TaskInput from "./components/taskInput";
import VerticalCard from "./components/verticalCard";
import { userAPI } from "APIs";

export const TaskContext = createContext<any>({ taskList: [], task: null });
const TasksPage = () => {
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [warningModalOpen, setWarningModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskDto | null>(null);
  const [runningTask, setRunningTask] = useState<TaskDto | null>(null);
  const [tasklist, setTasklist] = useState();

  const createTask = async (data: any) => {
    setLoading(true);
    try {
      const res = await userAPI.createTask(data);
      message.success("Task created successfully");
      setTasks((tasks) => [res, ...tasks]);
      if (tasks) {
        tasks.map((task) => {
          if (task.sessions[task.sessions.length - 1]?.status === "STARTED") {
            setRunningTask(task);
          }
        });
      }
      setViewModalOpen(false);
    } catch (error) {
      message.error("Error creating task");
      setViewModalOpen(false);
    } finally {
      setLoading(false);
    }
  };
  const handleWarning = async (data: any) => {
    try {
      const res = await userAPI.createTask(data);
      message.success("Task created successfully");
      setTasks((tasks) => [res, ...tasks]);
      if (tasks) {
        tasks.map((task) => {
          if (task.sessions[task.sessions.length - 1]?.status === "STARTED") {
            setRunningTask(task);
          }
        });
      }
      setWarningModalOpen(false);
    } catch (error) {
      message.error("Error creating task");
      setWarningModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (taskId: any) => {
    setLoading(true);
    try {
      const res = await userAPI.deleteTask(taskId);
      if (res) setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
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
      <div
        className="mr-8 overflow-y-clip"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-bold">Tasks</h2>
          <div className="flex gap-1">
            <Button onClick={() => setViewModalOpen(true)}>Add Task</Button>
            <Button
              className={`flex items-center justify-center ${
                syncing ? "border-green-500 text-green-500" : ""
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
            <div className="grid grid-cols-2 gap-4 overflow-y-auto">
              <div
                className="flex flex-col gap-2 overflow-y-auto border-r-2 pr-2"
                style={{ height: "calc(100vh - 155px)" }}
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
                  <SideCard task={selectedTask} />
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
        <GlobalModal
          isModalOpen={warningModalOpen}
          setIsModalOpen={setWarningModalOpen}
        >
          <SessionStartWarning
            runningTask={runningTask}
            handleWarning={handleWarning}
          />
        </GlobalModal>
      </div>
    </TaskContext.Provider>
  );
};

export default TasksPage;
