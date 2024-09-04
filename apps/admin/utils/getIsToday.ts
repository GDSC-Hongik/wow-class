import { parseISODate } from "@wow-class/utils";

export const getIsToday = (deadline: string) => {
  const today = new Date();
  const deadlineDay = parseISODate(deadline);

  if (
    today.getFullYear() === deadlineDay.year &&
    today.getMonth() + 1 === deadlineDay.month &&
    today.getDate() === deadlineDay.day
  )
    return true;

  return false;
};

export default getIsToday;
