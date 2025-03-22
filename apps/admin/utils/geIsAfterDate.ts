export const getNowIsAfterDate = (date: string): boolean => {
  const now = new Date();
  const start = new Date(`${date}+09:00`);

  return now.getTime() >= start.getTime();
};
