import { Card } from "antd";
import Stopwatch from "../../stopWatch/vertical/reactStopWatch";
import TaskDetailsModal from "../../modals/taskDetails.modal";
import { getLocalStorage } from "@/storage/storage";
import { TaskDto } from "../../../../models/tasks/index";
import { statusColorEnum, taskStatusEnum } from "utils/constants";
import { BsCheck2Circle, BsCircle } from "react-icons/bs";
import { useState } from "react";
import { getTotalSpentTime } from "@/services/timeActions";
type Props = {
  task: TaskDto;
  deleteTask: Function;
  setSelectedTask: Function;
  selectedTask: TaskDto;
};

const VerticalCard = ({
  task,
  deleteTask,
  setSelectedTask,
  selectedTask,
}: Props) => {
  const [completed, setCompleted] = useState(false);
  const taskName = task ? task.title : "Task 1";
  const [viewModalOpen, setViewModalOpen] = useState(false);
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
  const handleDelete = async () => {
    await deleteTask(task.id);
  };
  console.log(getTotalSpentTime(task.sessions) / (task?.estimation * 3600000));

  return (
    <>
      <div
        className={`w-full h-min disable p-2 border rounded-lg ${
          task.id === selectedTask?.id ? "" : "bg-gray-200"
        }`}
        onClick={() => setSelectedTask(task)}
      >
        <div className="flex justify-between w-full items-center">
          <div
            className="hover:text-blue-500 flex gap-2 items-center hover:cursor-pointer text-lg font-medium"
            onClick={() => setViewModalOpen(true)}
          >
            <div onClick={() => setCompleted(!completed)}>
              {completed ? (
                <BsCircle className="text-gray-300" />
              ) : (
                <BsCheck2Circle className="text-blue-700" />
              )}{" "}
            </div>
            {taskName}
          </div>
          {/* <div className="w-32 h-1 bg-gray-200">
            <div
              className=" h-1 "
              style={{
                width: `${Math.round(
                  getTotalSpentTime(task.sessions) /
                    (task?.estimation * 3600000)
                )}%`,
                backgroundColor: statusColorEnum[task.status],
              }}
            />
          </div> */}
          <div>
            <div className="grid grid-cols-6 gap-1 w-80 items-center pr-3">
              <div className="w-24 h-1 bg-gray-200 col-span-2">
                <div
                  className=" h-1 "
                  style={{
                    width: `${Math.round(
                      getTotalSpentTime(task.sessions) /
                        (task?.estimation * 3600000)
                    )}%`,
                    backgroundColor: statusColorEnum[task.status],
                  }}
                />
              </div>
              {/* <div
                className={`text-sm text-center font-medium col-span-2 `}
                style={{
                  color: statusColorEnum[task.status],
                }}
              >
                {typeof task?.status === "string" &&
                  taskStatusEnum[task.status]}
              </div> */}
              <Stopwatch
                task={task}
                disable={task.id !== selectedTask?.id}
                addSession={addSession}
                addEndTime={addEndTime}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <TaskDetailsModal
        task={task}
        isModalOpen={viewModalOpen}
        setIsModalOpen={setViewModalOpen}
        handleDelete={handleDelete}
      /> */}
    </>
  );
};

export default VerticalCard;
