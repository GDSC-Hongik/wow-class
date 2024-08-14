export const dateToFormatString = (date: Date | undefined): string => {
  if (!date) return "";
  else {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
};

export const setStudyEndDate = (date: Date, studyCourseWeek: number): Date => {
  const daysToAdd = studyCourseWeek * 7; // 주 수를 일수로 변환 (1주 = 7일)

  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + daysToAdd);

  return endDate;
};

export const formatStringToDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  if (year && month) return new Date(year, month - 1, day);
  return new Date();
};
