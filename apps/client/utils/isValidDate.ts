export const getNowIsAfterStartDate = (startDate: string): boolean => {
  const now = new Date();
  const start = new Date(`${startDate}+09:00`);

  return now.getTime() >= start.getTime();
};

export const getNowIsBeforeEndDate = (endDate: string): boolean => {
  const now = new Date();
  const end = new Date(`${endDate}+09:00`);

  return now.getTime() <= end.getTime();
};
