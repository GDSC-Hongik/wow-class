export const studyCurriculumList = Array.from({ length: 12 }, (_, index) => {
  const week = index + 1;
  return { text: `${week}주`, value: `${week}` };
});
