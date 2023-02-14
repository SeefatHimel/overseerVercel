import { updateTask } from "@/sevices/taskActions";
import { getLocalStorage } from "@/storage/storage";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { TaskDto } from "models/tasks";
import { useState } from "react";

type Props = {
  task: TaskDto;
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

const TaskDetailsModal = ({ task, isModalOpen, setIsModalOpen }: Props) => {
  const [editing, SetEditing] = useState(false);
  const [currentTaskName, setCurrentTaskName] = useState(task?.title);
  const taskDetails = task;
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getTimeFromTimeStamp = (timestamp: any) => {
    const pad = (num: any) => ("0" + num).slice(-2); // or use padStart
    const date = new Date(timestamp * 1000);
    let hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();
    return (
      <div>
        {pad(day) +
          " " +
          pad(month) +
          " " +
          year +
          " " +
          pad(hours) +
          ":" +
          pad(minutes) +
          ":" +
          pad(seconds)}
      </div>
    );
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

        {/* <div>
          Total Spent : {taskDetails?.total ? taskDetails?.total : 0} seconds{" "}
        </div> */}
        <div className="w-full">
          <h3>Sessions</h3>
          {/* {taskDetails?.timeArray?.map((time: any, index: number) => {
            return (
              <div
                className="flex gap-4 "
                key={Math.random()}
                onClick={() => {
                  getTimeFromTimeStamp(time.startTime);
                }}
              >
                <div className="flex">
                  {index + 1} {"> "} Start :{" "}
                  {getTimeFromTimeStamp(time.startTime)}
                </div>
                <div className="flex">
                  End : {getTimeFromTimeStamp(time.endTime)}
                </div>
                <div className="flex">
                  Total : {time.endTime - time.startTime} seconds
                </div>
              </div>
            );
          })} */}
        </div>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
