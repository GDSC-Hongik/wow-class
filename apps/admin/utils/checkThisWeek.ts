const checkThisWeek = (dateString: string): boolean => {
  const date = new Date(dateString);
  const today = new Date();

  const pastWeekDate = new Date(date);
  pastWeekDate.setDate(date.getDate() - 7);

  return today >= pastWeekDate && today <= date;
};

export default checkThisWeek;
