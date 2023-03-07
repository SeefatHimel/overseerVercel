import Sessions from "@/components/modals/components/sessions";
import StopWatch from "@/components/stopWatch/vertical/reactStopWatch";
import ReactStopWatchCopy from "@/components/stopWatch/horizontal/reactStopWatchCopy";
import { Card, Spin } from "antd";
import { TaskDto } from "models/tasks";
import { useState, useEffect } from "react";
import { statusColorEnum, taskStatusEnum } from "utils/constants";

type Props = {
  task: TaskDto;
};
const SideCard = ({ task }: Props) => {
  const taskName = task ? task.title : "Task 1";
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<TaskDto>();
  const addSession = (session: any) => {
    if (!task.sessions) task.sessions = [];
    task.sessions?.push(session);
  };
  const addEndTime = (session: any) => {
    task.sessions = task.sessions?.map((_session: any) => {
      if (_session.id === session.id) return session;
      else return _session;
    });
  };
  useEffect(() => {
    console.log(task, newTask);
    if (newTask !== task) setNewTask(task);
  }, [task, newTask]);
  return (
    <>
      <Spin spinning={newTask !== task}></Spin>
      {newTask === task && (
        <Card className="w-full mb-2 px-2 border rounded-lg flex flex-col items-center">
          <div
            className="hover:text-blue-500 w-min mx-auto  hover:cursor-pointer text-lg font-medium"
            onClick={() => setViewModalOpen(true)}
          >
            {taskName}
          </div>
          <div
            className={`text-sm text-center font-medium col-span-2 `}
            style={{
              color: statusColorEnum[task.status],
            }}
          >
            {typeof task?.status === "string" && taskStatusEnum[task.status]}
          </div>
          <div>
            {newTask === task && (
              <ReactStopWatchCopy
                task={newTask}
              />
            )}
          </div>
          <Sessions taskDetails={task} />
        </Card>
      )}
    </>
  );
};

export default SideCard;
