/**
 * @description 10보다 작은 숫자에 0을 붙여 반환합니다.
 * @example padWithZero(2) -> "02"
 */

const padWithZero = (number: number) => {
  return number.toString().padStart(2, "0");
};

export default padWithZero;
