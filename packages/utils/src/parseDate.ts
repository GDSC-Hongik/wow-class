/**
 *
 * @description ISO Date 형식의 string 을 hours, minutes, seconds, year, month, day 로 파싱합니다.
 * @example parseDate("2021-08-31T00:00:00.000Z") -> { year: 2021, month: 8, day: 31, hours: 0, minutes: 0, seconds: 0 }
 */

const parseDate = (dateString: string) => {
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

export default parseDate;
