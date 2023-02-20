import {
  getFormattedTime,
  getFormattedTotalTime,
} from "@/services/timeActions";

type Props = {
  taskDetails: any;
  currentSession: boolean | null;
  setCurrentSession: Function;
};

const Sessions = ({
  taskDetails,
  currentSession,
  setCurrentSession,
}: Props) => {
  return (
    <>
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
        const endTime: any = session.endTime ? new Date(session.endTime) : null;
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
    </>
  );
};

export default Sessions;
