import { padWithZero } from ".";

/**
 * @description ISO Date 형식의 string 을 hours, minutes, seconds, year, month, day 로 파싱합니다.
 * @example parseDate("2021-08-31T00:00:00.000Z") -> { year: 2021, month: 8, day: 31, hours: 0, minutes: 0, seconds: 0 }
 */

export const parseISODate = (dateString: string) => {
  const date = new Date(dateString);

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };
};

/**
 * @description ISO Date 형식의 string 을 "YYYY.MM.DD" 형식으로 포맷합니다.
 * @example formatCreatedDate("2021-08-31T00:00:00.000Z") -> "2021.08.31"
 */

export const formatISODateWithDot = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = padWithZero(date.getMonth() + 1);
  const day = padWithZero(date.getDate());

  return `${year}.${month}.${day}`;
};
