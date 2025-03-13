import { padWithZero } from ".";

/**
 * @description ISO Date 객체를 한국 시간 기준의 ISOString 형식으로 반환합니다.
 * @example Sat Aug 31 2024 17:22:00 GMT+0900 (한국 표준시) -> "2024-08-31T17:22:00"
 */

export const formatDateToISOString = (date: Date): string => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const UTCDate = new Date(date.getTime() - offset);

  return UTCDate.toISOString().split(".")[0] || "";
};

/**
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

/**
 * @description ISO Date 형식의 startDate와 endDate를 받아, 시작일과 종료일의 월과 일을 "MM.DD-MM.DD" 형식으로 포맷하여 반환합니다.
 * @example formatWeekPeriod("2024-08-08T15:14:59", "2024-08-13T15:15:04") -> "08.08-08.13"
 */
export const formatWeekPeriod = (startDate: string, endDate: string) => {
  const { month: startMonth, day: startDay } = parseISODate(startDate);
  const { month: endMonth, day: endDay } = parseISODate(endDate);

  const {
    formattedStartMonth,
    formattedStartDay,
    formattedEndMonth,
    formattedEndDay,
  } = {
    formattedStartMonth: padWithZero(startMonth),
    formattedStartDay: padWithZero(startDay),
    formattedEndMonth: padWithZero(endMonth),
    formattedEndDay: padWithZero(endDay),
  };

  return `${formattedStartMonth}.${formattedStartDay}-${formattedEndMonth}.${formattedEndDay}`;
};

/**
 * @description ISO Date 형식의 startDate와 endDate를 받아 시간을 추가한 뒤 하나의 객체로 반환합니다
 * @param startDate : 시작 일자 Date 객체
 * @param endDate : 끝 일자 Date 객체
 * @example formatStartEndDate(startDate, endDate) -> startDate: 2025-03-12T00:00:00 , endDate: 2025-03-20T23:59:59
 * @returns
 * object: { startDate: string, endDate: string, }
 */
export const formatStartEndDate = (startDate: Date, endDate: Date) => {
  const formattedStartDate = dateToFormatString(startDate);
  const formattedEndDate = dateToFormatString(endDate);

  return {
    startDate: `${formattedStartDate}T00:00:00`,
    endDate: `${formattedEndDate}T23:59:59`,
  };
};
