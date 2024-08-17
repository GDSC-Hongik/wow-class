/**
 * @description 시간을 받아 시간, 분, 초로 나누어 반환합니다.
 * @example splitTime("12:30:00") -> { hours: "12", minutes: "30", seconds: "00" }
 */

const splitTime = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(":");
  return {
    hours,
    minutes,
    seconds,
  };
};

export default splitTime;
