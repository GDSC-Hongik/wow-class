export const validateAttendanceNumber = (attendanceNumber: string) => {
  return /^\d{4}$/.test(attendanceNumber);
};
