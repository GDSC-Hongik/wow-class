export const getNowIsAfterStartDate = (startDate: string): boolean => {
  const now = new Date();
  const start = new Date(`${startDate}`);

  console.log(now, now.getTime(), start, start.getTime(), "check2");
  return now.getTime() >= start.getTime();
};

export const getNowIsBeforeEndDate = (endDate: string): boolean => {
  const now = new Date();
  const end = new Date(endDate);
  console.log(now, end, "check3");
  return now.getTime() <= end.getTime();
};
