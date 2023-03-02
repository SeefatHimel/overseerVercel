export const getFormattedTotalTime = (time: number) => {
  let tmp = time;
  tmp = Math.round(tmp / 1000);
  const seconds = tmp % 60;
  tmp = Math.floor(tmp / 60);
  const mins = tmp % 60;
  tmp = Math.floor(tmp / 60);

  return `${tmp ? tmp + " hours " : ""}${mins ? mins + " Mins " : ""}${
    seconds ?? seconds + "Seconds"
  }`;
};

export const getFormattedTime = (timestamp: any) => {
  // or use padStart
  const date = timestamp;
  let hours = date?.getHours(),
    minutes = date?.getMinutes(),
    seconds = date?.getSeconds(),
    day = date?.getDate(),
    month = date?.getMonth(),
    year = date?.getFullYear();
  return (
    hours + ":" + minutes + ":" + seconds + " " + day + "/" + month + "/" + year
  );
};
export const getTotalSpentTime = (sessions: any) => {
  let total: number = 0;
  sessions?.forEach((session: any) => {
    if (session.endTime) {
      const startTime: any = new Date(session.startTime);
      const endTime: any = new Date(session.endTime);
      total += endTime - startTime;
    }
  });

  if (!sessions || sessions?.length === 0) return 0;
  else return total;
};
