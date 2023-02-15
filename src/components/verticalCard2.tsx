import { Card } from "antd";
import { useState } from "react";
import Stopwatch from "./stopWatch/reactStopWatch";
import TaskDetailsModal from "./modals/taskDetails.modal";
import { getLocalStorage } from "@/storage/storage";
import { TaskDto } from "../../models/tasks/index";

type Props = {
  task: TaskDto;
};

const VerticalCard2 = ({ task }: Props) => {
  const taskName = task ? task.title : "Task 1";
  task.estimation = 12;
  const addSession = (session: any) => {
    task.sessions.push(session);
  };
  const addEndTime = (session: any) => {
    task.sessions = task.sessions.map((_session: any) => {
      if (_session.id === session.id) return session;
      else return _session;
    });
  };
  const [viewModalOpen, setViewModalOpen] = useState(false);
  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <div
            className="hover:text-blue-500 hover:cursor-pointer"
            onClick={() => setViewModalOpen(true)}
          >
            {taskName}
          </div>
          <div className="flex w-max items-center gap-2">
            <div>{task?.status ? task.status : "To-Do"}</div>
            <Stopwatch
              task={task}
              addSession={addSession}
              addEndTime={addEndTime}
            />
          </div>
        </div>
      </Card>
      <TaskDetailsModal
        task={task}
        isModalOpen={viewModalOpen}
        setIsModalOpen={setViewModalOpen}
      />
    </>
  );
};

export default VerticalCard2;
