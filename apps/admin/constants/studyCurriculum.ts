export const studyCourseList = Array.from({ length: 15 }, (_, index) => {
  const week = index + 1;
  return { text: `${week}회차`, value: `${week}` };
});
