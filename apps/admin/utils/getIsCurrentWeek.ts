const getIsCurrentWeek = (dateString: string): boolean => {
  const startDate = new Date(dateString);
  const today = new Date();

  const diffInTime = today.getTime() - startDate.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  console.log(diffInDays);

  return 0 <= diffInDays && diffInDays < 7;
};

export default getIsCurrentWeek;
