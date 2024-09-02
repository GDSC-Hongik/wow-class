const getIsCurrentWeek = (dateString: string, week: number): boolean => {
  const startDate = new Date(dateString);
  const today = new Date();

  const diffInTime = today.getTime() - startDate.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  const weekNumber = Math.ceil((diffInDays + 1) / 7);

  return weekNumber === week;
};

export default getIsCurrentWeek;
