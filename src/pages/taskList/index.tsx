import TaskInput from "@/components/taskInput";
import { createContext, useEffect, useState } from "react";
import VerticalCard from "../../components/tasks/components/verticalCard";
import { getLocalStorage } from "@/storage/storage";
import { Button } from "antd";
import TasksPage from "@/components/tasks";
import GlobalMOdal from "../../components/modals/globalModal";
import { NextPage } from "next";
import { userAPI } from "APIs";
var cookie = require("cookie");
const TaskList: NextPage = ({ allTask }: any) => {
  console.log("🚀 ~ file: index.tsx:11 ~ tasksList", allTask);
  const [taskList, setTaskList] = useState([]);
  const [allTaskList, setAllTaskList] = useState(allTask || []);
  // const [addTask, setAddTask] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);

  const tasks = getLocalStorage("TaskList");
  useEffect(() => {
    // console.log(tasks, taskList, tasks !== taskList);

    if (tasks?.length !== taskList?.length) setTaskList(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskList]);
  return (
    <div>
      <div className="w-full">
        <TasksPage allTask={allTask} />
      </div>
    </div>
  );
};
export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  console.log(
    "🚀 ~ file: index.tsx:61 ~ getServerSideProps ~ req.headers",
    token.access_token
  );
  const res = await userAPI.getTasks(token?.access_token as string);
  console.log("🚀 ~ file: index.tsx:65 ~ getServerSideProps ~ res", res);
  return {
    props: {
      allTask: res,
    },
  };
}
export default TaskList;
