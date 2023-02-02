import { Card } from "antd";
import Stopwatch from "./stopWatch/reactStopWatch";

const VerticalCard = ({ task }: any) => {
  const taskName = task ? task : "Task 1";
  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <div>{taskName}</div> stop
          {/* <Stopwatch taskName={taskName} /> */}
        </div>
      </Card>
    </>
  );
};

export default VerticalCard;
