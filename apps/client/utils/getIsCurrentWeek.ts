export const getIsCurrentWeek = (
  startDate: string,
  endDate: string
): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  return now >= start && now <= end;
};
