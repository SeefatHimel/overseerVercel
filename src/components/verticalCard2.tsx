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
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const taskDetails = getLocalStorage(taskName);
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
          <div className="flex items-center gap-2">
            <div>{taskDetails?.status ? taskDetails.status : "To-Do"}</div>
            <Stopwatch taskName={taskName} />
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
