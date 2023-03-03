import React from "react";
import { Button, Tooltip } from "antd";
import { PlayIcon } from "../../../icons/playIcon";
import { StopIcon } from "@/icons/stopIcon";
function BtnComponent(props) {
  return (
    <div className="col-span-1">
      {props.status === 0 ? (
        <Tooltip placement="bottom" title={"Start Session"} color="blue">
          <Button
            type="ghost"
            className="border-0 text-green-500"
            onClick={props.start}
            icon={<PlayIcon />}
          />
        </Tooltip>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <Tooltip placement="bottom" title={"Stop Session"} color="blue">
          <Button
            className="border-0 text-red-600"
            type="ghost"
            onClick={props.stop}
            icon={<StopIcon />}
          />
        </Tooltip>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <Tooltip placement="bottom" title={"Start New Session"} color="blue">
          <Button
            type="ghost"
            className="border-0 text-green-500"
            onClick={props.start}
            icon={<PlayIcon />}
          />
        </Tooltip>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
