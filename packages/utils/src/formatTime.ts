/**
 * @description 10보다 작은 숫자에 0을 붙여 반환합니다.
 * @example padWithZero(2) -> "02"
 */

export const padWithZero = (number: number) => {
  return number.toString().padStart(2, "0");
};

/**
 * @description 시간을 받아 시간, 분, 초로 나누어 반환합니다.
 * @example splitTime("12:30:00") -> { hours: "12", minutes: "30", seconds: "00" }
 */

export const splitTime = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(":");
  return {
    hours,
    minutes,
    seconds,
  };
};
