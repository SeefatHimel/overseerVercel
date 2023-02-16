import { updateTask } from "@/sevices/taskActions";
import {
  getFormattedTime,
  getFormattedTotalTime,
  getTotalSpentTime,
} from "@/sevices/timeActions";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { TaskDto } from "models/tasks";
import { useState } from "react";

type Props = {
  task: TaskDto;
  isModalOpen: boolean;
  setIsModalOpen: Function;
  handleDelete: Function;
};

const TaskDetailsModal = ({
  task,
  isModalOpen,
  setIsModalOpen,
  handleDelete,
}: Props) => {
  const [editing, SetEditing] = useState(false);
  const [currentTaskName, setCurrentTaskName] = useState(task?.title);
  const [currentSession, setCurrentSession] = useState(null);
  const taskDetails = task;

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="TaskDetails Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={720}
        footer={null}
      >
        <div className="flex gap-5 items-center">
          <div className="flex items-center">
            <span className="pr-2">Task Name : </span>
            {editing ? (
              <Input
                size="small"
                className="h-5 w-36"
                value={currentTaskName}
                onChange={(e) => setCurrentTaskName(e.target.value)}
              />
            ) : (
              currentTaskName
            )}{" "}
          </div>
          {editing ? (
            <SaveOutlined
              className="hover:text-green-600"
              onClick={() => {
                if (taskDetails) taskDetails.title = currentTaskName;
                updateTask(task, taskDetails.title) ?? SetEditing(false);
                handleCancel();
              }}
            />
          ) : (
            <EditOutlined
              className="hover:text-green-600"
              onClick={() => {
                SetEditing(true);
              }}
            />
          )}
          {editing && (
            <div
              className="hover:text-red-600"
              onClick={() => {
                handleDelete();
                setIsModalOpen(false);
              }}
            >
              Delete
            </div>
          )}
        </div>
        <div>
          Description :{" "}
          {taskDetails?.description ? taskDetails?.description : ""}
        </div>
        <div>
          Estimation :{" "}
          {taskDetails?.estimation ? taskDetails?.estimation : "No estimation"}
        </div>
        {/* <div>
          Time Left :{" "}
          {taskDetails?.estimation
            ? taskDetails?.estimation - taskDetails.total
            : "No estimation"}{" "}
        </div> */}

        <div>Status : {taskDetails?.status ? taskDetails?.status : ""}</div>

        <div>
          Total Spent :{" "}
          {getFormattedTotalTime(getTotalSpentTime(task.sessions))} seconds{" "}
        </div>
        <div className="w-full">
          <h3>Sessions</h3>
          {taskDetails?.sessions?.map((session: any, index: number) => {
            const startTime: any = new Date(session.startTime);
            const endTime: any = session.endTime
              ? new Date(session.endTime)
              : null;
            if (endTime)
              return (
                <div className="flex gap-4 " key={session.id}>
                  <div className="flex">
                    {`${index + 1} > Start : ${getFormattedTime(startTime)}`}
                  </div>
                  <div className="flex">{`End : ${getFormattedTime(
                    endTime
                  )}`}</div>
                  <div className="flex">
                    Total :{" "}
                    {endTime ? getFormattedTotalTime(endTime - startTime) : 0}{" "}
                    seconds
                  </div>
                </div>
              );
            else !currentSession && setCurrentSession(session);
          })}
        </div>
        {taskDetails?.sessions?.map((session: any, index: number) => {
          const startTime: any = new Date(session.startTime);
          const endTime: any = session.endTime
            ? new Date(session.endTime)
            : null;
          if (!endTime)
            return (
              <div className="w-full" key={session.id}>
                <p>Current Session</p>
                <div className="flex gap-4 ">
                  <div className="flex">
                    {`${index + 1} > Start : ${getFormattedTime(startTime)}`}
                  </div>
                </div>
              </div>
            );
        })}
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
