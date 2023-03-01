import { TaskContext } from "@/pages/taskList";
import { Button, Empty, message, Spin } from "antd";
import { userAPI } from "APIs";
import { TaskDto } from "models/tasks";
import { useState, useEffect, useContext } from "react";
import GlobalModal from "../modals/globalModal";
import TaskInput from "../taskInput copy";
import VerticalCard2 from "../verticalCard2";

const TasksPage = () => {
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [loading, setLoading] = useState(false);
  const { tasklist } = useContext(TaskContext);

  const createTask = async (data: any) => {
    setLoading(true);
    try {
      const res = await userAPI.createTask(data);
      message.success("Task created successfully");
      setTasks((tasks) => [res, ...tasks]);
    } catch (error) {
      message.error("Error creating task");
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

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <Button onClick={() => setViewModalOpen(true)}>Add Task</Button>
      </div>

      <Spin spinning={loading}>
        {tasks.length ? (
          <div className="grid grid-cols-1  gap-4">
            {tasks.map((task) => (
              <VerticalCard2
                key={task.id}
                task={task}
                deleteTask={deleteTask}
              />
            ))}
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
    </>
  );
};

export default TasksPage;
