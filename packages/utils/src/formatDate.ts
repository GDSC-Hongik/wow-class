/**
 *
 * @description ISO Date 형식의 string 을 hours, minutes, seconds, year, month, day 로 파싱합니다.
 * @example parseDate("2021-08-31T00:00:00.000Z") -> { year: 2021, month: 8, day: 31, hours: 0, minutes: 0, seconds: 0 }
 */

export const parseISODate = (dateString: string) => {
  const date = new Date(dateString);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

/**
 * @description ISO Date 객체를 `${year}-${month}-${day}` 형식의 string으로 반환합니다.
 * @example dateToFormatString(new Date('2024-08-20T15:30:00')) -> 2024-08-20
 */

export const dateToFormatString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

/**
 * @description ISO Date 객체와 스터디 총 진행 기간(주)를 받아 ISO Date 객체를 반환합니다.
 * @example getStudyEndDate(new Date('2024-08-20T15:30:00'), 2) -> new Date('2024-09-03T15:30:00')
 */

export const getStudyEndDate = (date: Date, studyCourseWeek: number): Date => {
  const daysToAdd = studyCourseWeek * 7;

  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + daysToAdd);

  return endDate;
};

/**
 * @description ISO Date 형식의 string을 ISO Date 객체로 변환합니다.
 * @example formatStringToDate('2024-08-20') -> new Date('2024-08-20')
 */

export const formatStringToDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  if (year && month) return new Date(year, month - 1, day);
  return new Date();
};
