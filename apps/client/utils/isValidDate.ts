export const getNowIsAfterStartDate = (startDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  return now >= start;
};

export const getNowIsBeforeEndDate = (endDate: string): boolean => {
  const now = new Date();
  const end = new Date(endDate);
  return now <= end;
};
