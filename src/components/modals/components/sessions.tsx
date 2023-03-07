import {
  getFormattedTime,
  getFormattedTotalTime,
} from "@/services/timeActions";

type Props = {
  taskDetails: any;
};

const Sessions = ({ taskDetails }: Props) => {
  const formatDate = (time: any) => new Date(time);

  const endedSessions = taskDetails?.sessions?.filter(
    (session: any) => session.endTime
  );
  const currentSessions = taskDetails?.sessions?.filter(
    (session: any) => !session.endTime
  );

  return (
    <>
      <h3 className="w-full  text-left">Sessions</h3>
      <div className="w-full overflow-y-scroll max-h-72">
        {endedSessions?.map((session: any, index: number) => {
          const startTime: any = formatDate(session.startTime);
          const endTime: any = formatDate(session.endTime);

          const totalTime = getFormattedTotalTime(endTime - startTime);
          return (
            <div className="grid grid-cols-3 " key={session.id}>
              <div className="flex">{`${index + 1} > Start : ${getFormattedTime(
                startTime
              )}`}</div>
              <div className="flex">{`End : ${getFormattedTime(endTime)}`}</div>
              <div className="flex">Total : {totalTime} seconds</div>
            </div>
          );
        })}
      </div>
      {currentSessions?.map((session: any, index: number) => {
        const startTime = formatDate(session.startTime);
        return (
          <div className="w-full" key={session.id}>
            <p>Current Session</p>
            <div className="flex gap-4 ">
              <div className="flex">{`${index + 1} > Start : ${getFormattedTime(
                startTime
              )}`}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sessions;
