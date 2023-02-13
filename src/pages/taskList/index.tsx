import TaskInput from "@/components/taskInput";
import { createContext, useEffect, useState } from "react";
import VerticalCard from "../../components/verticalCard";
import { getLocalStorage } from "@/storage/storage";
import { Button } from "antd";
import TasksPage from "@/components/tasks";
import GlobalMOdal from "../../components/modals/globalModal";
import { NextPage } from "next";
import { userAPI } from "APIs";
var cookie = require("cookie");
export const TaskContext = createContext<any>({ taskList: [] });
const TaskList: NextPage = ({ allTask }: any) => {
  console.log("🚀 ~ file: index.tsx:11 ~ tasksList", allTask);
  const [taskList, setTaskList] = useState([]);
  // const [addTask, setAddTask] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);

  const tasks = getLocalStorage("TaskList");
  useEffect(() => {
    // console.log(tasks, taskList, tasks !== taskList);

    if (tasks?.length !== taskList?.length) setTaskList(tasks);
  }, [taskList]);
  return (
    <TaskContext.Provider value={{ tasklist: allTask }}>
      <div>
        <div className="w-96 mx-auto mt-20">
          <TasksPage />
          <div className="py-2">
            {!viewModalOpen && (
              <Button
                onClick={() => {
                  // setAddTask(true);
                  setViewModalOpen(true);
                }}
              >
                Add Task
              </Button>
            )}
            {viewModalOpen && (
              <>
                {/* <Button className="mb-2" onClick={() => setAddTask(false)}>
                Cancel
              </Button> */}
                <GlobalMOdal
                  isModalOpen={viewModalOpen}
                  setIsModalOpen={setViewModalOpen}
                >
                  <TaskInput taskList={taskList} setTaskList={setTaskList} />
                </GlobalMOdal>
              </>
            )}
          </div>
          {/* <VerticalCard /> */}
          {taskList?.map((task) => (
            <VerticalCard key={Math.random()} task={task} />
          ))}
        </div>
      </div>
    </TaskContext.Provider>
  );
};
export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  console.log(
    "🚀 ~ file: index.tsx:61 ~ getServerSideProps ~ req.headers",
    token.access_token
  );

  // const allProducts = await userAPI.getPublicProducts();
  // const featuredProducts = await userAPI.getFeaturedProducts();
  // const cartData = await userAPI.getCart(token.token);
  const res = await userAPI.getTasks(token?.access_token as string);
  console.log("🚀 ~ file: index.tsx:65 ~ getServerSideProps ~ res", res);
  return {
    props: {
      allTask: res,
    },
  };
}
export default TaskList;
