import React, { useEffect, useState } from "react";
import DisplayComponent from "./Components/DisplayComponent";
import BtnComponent from "./Components/BtnComponent";
import { getLocalStorage, setLocalStorage } from "../../storage/storage";
import { userAPI } from "APIs";
import { log } from "console";

function StopWatch({ task }: any) {
  const { sessions } = task;
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState<any>();
  const [status, setStatus] = useState<any>(0);
  const [resumeTime, setResumeTime] = useState<boolean>(false);
  // Not started = 0
  // started = 1
  // stopped = 2

  const startSession = async () => {
    console.log("start");
    const res = await userAPI.createSession(task.id);
    console.log("🚀 ~ file: reactStopWatch.tsx:19 ~ startSession ~ res", res);
  };
  const stopSession = async () => {
    console.log("stop");

    const res = await userAPI.stopSession(task.id);
    console.log("🚀 ~ file: reactStopWatch.tsx:19 ~ startSession ~ res", res);
  };

  function getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000);
  }

  const start = async () => {
    await startSession();
    run();
    setStatus(1);
    setInterv(setInterval(run, 100));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 10) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    stopSession();
    const currentTime = getCurrentTimestamp();
    // const taskDetails = getLocalStorage(taskName);
    // console.log(
    //   taskDetails.startTime,
    //   currentTime,
    //   currentTime - taskDetails.startTime
    // );
    // taskDetails.total += currentTime - taskDetails.startTime;
    // taskDetails.timeArray?.push({
    //   startTime: taskDetails.startTime,
    //   endTime: currentTime,
    // });
    // setLocalStorage(taskName, {
    //   timeArray: taskDetails.timeArray,
    //   startTime: null,
    //   total: taskDetails.total,
    // });
    const res = clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();
  const resumeTimeFunction = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 100));
  };
  useEffect(() => {
    const initialTime = { ms: 0, s: 0, m: 0, h: 0 };

    setTime(initialTime);
    // if (taskDetails?.startTime) {
    //   setResumeTime(true);
    // }
  }, []);
  useEffect(() => {
    if (resumeTime) resumeTimeFunction();
  }, [resumeTime]);

  return (
    <div className="flex items-center">
      <DisplayComponent time={time} />
      <BtnComponent
        status={status}
        resume={resume}
        reset={reset}
        stop={stop}
        start={start}
      />
    </div>
  );
}

export default StopWatch;
