import { Card } from "antd";
import { useState } from "react";
import Stopwatch from "./stopWatch/reactStopWatch";
import TaskDetailsModal from "./modals/taskDetails.modal";
import { getLocalStorage } from "@/storage/storage";

const VerticalCard = ({ task }: any) => {
  const taskName = task ? task : "Task 1";
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
            <div>
              {taskDetails
                ? taskDetails.status
                  ? taskDetails.status
                  : "In Progress"
                : "To-Do"}
            </div>
            <Stopwatch taskName={taskName} />
          </div>
        </div>
      </Card>
      {/* <TaskDetailsModal
        taskName={taskName}
        isModalOpen={viewModalOpen}
        setIsModalOpen={setViewModalOpen}
      /> */}
    </>
  );
};

export default VerticalCard;
