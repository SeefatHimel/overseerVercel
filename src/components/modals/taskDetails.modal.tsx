import { getLocalStorage } from "@/storage/storage";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";

type Props = {
  taskName: string;
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

const TaskDetailsModal = ({ taskName, isModalOpen, setIsModalOpen }: Props) => {
  const taskDetails = getLocalStorage(taskName);
  const [editing, SetEditing] = useState(false);
  console.log("🚀 ~ file: taskDetails.modal.tsx:14 ~ taskDetails", taskDetails);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getTimeFromTimeStamp = (timestamp: any) => {
    const pad = (num: any) => ("0" + num).slice(-2); // or use padStart
    const date = new Date(timestamp * 1000);
    console.log("🚀 ~ file: taskDetails.modal.tsx:24 ~ getTime ~ date", date);
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
          <div>Task Name : {taskName} </div>
          {editing ? (
            <SaveOutlined
              className="hover:text-green-600"
              onClick={() => {
                SetEditing(false);
              }}
            />
          ) : (
            <EditOutlined
              className="hover:text-green-600"
              onClick={() => {
                SetEditing(true);
              }}
            />
          )}{" "}
        </div>
        <div>Total Spent : {taskDetails.total} seconds </div>
        <div className="w-full">
          <h3>Sessions</h3>
          {taskDetails.timeArray?.map((time: any, index: number) => {
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
          })}
        </div>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
