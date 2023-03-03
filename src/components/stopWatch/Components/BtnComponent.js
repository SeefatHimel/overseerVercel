import React from "react";
import { Button } from "antd";
import { PlayIcon } from "../../../icons/playIcon";
import { StopIcon } from "@/icons/stopIcon";
function BtnComponent(props) {
  return (
    <div className="col-span-1">
      {props.status === 0 ? (
        <Button
          className="border-0"
          onClick={props.start}
          icon={<PlayIcon />}
        />
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <Button
            className="border-0 hover:text-red-600"
            type="ghost"
            onClick={props.stop}
            icon={<StopIcon />}
          />
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <Button
            className="border-0"
            onClick={props.resume}
            icon={<PlayIcon />}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
