export const getIsAfterStartDate = (startDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  return now >= start;
};
