import React from "react";
import { Button, Tooltip } from "antd";
import { PlayIcon } from "@/icons/playIcon";
import { StopIcon } from "@/icons/stopIcon";
function BtnComponent(props) {
  return (
    <div className="col-span-1">
      {props.status === 0 ? (
        <div
          className=" bg-indigo-700 rounded-full p-5 transition-all duration-1000"
          onClick={() => {
            props.start();
            document.getElementById(`vertical-start${props.id}`)?.click();
          }}
          id={`horizontal-start${props.id}`}
        >
          <Tooltip placement="bottom" title={"Start Session"} color="blue">
            <div type="ghost" className="border-0 text-white mx-auto w-min">
              <PlayIcon fill="white" className="h-6 w-6" />
            </div>
          </Tooltip>
        </div>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div
          className=" bg-indigo-700 rounded-full p-5"
          id={`horizontal-stop${props.id}`}
          onClick={() => {
            props.stop();
            document.getElementById(`vertical-stop${props.id}`)?.click();
          }}
        >
          <Tooltip
            placement="bottom"
            title={"Stop Session"}
            color="blue"
            className="mx-auto w-min"
          >
            <div
              className="border-0 text-white mx-auto w-min"
              // type="ghost"
            >
              <StopIcon fill="white" className="h-6 w-6" />
            </div>
          </Tooltip>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div
          className=" bg-indigo-700 rounded-full p-5 "
          id={`horizontal-resume${props.id}`}
          onClick={() => {
            props.start();
            document.getElementById(`vertical-resume${props.id}`)?.click();
          }}
        >
          <Tooltip placement="bottom" title={"Start Session"} color="blue">
            <div type="ghost" className="border-0 text-white mx-auto w-min">
              <PlayIcon fill="white" className="h-6 w-6" />
            </div>
          </Tooltip>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
