"use client";

import { Text } from "@wow-class/ui";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
const StudyInfo = () => {
  const { studyName, currentWeek } = useAttendanceCheckSearchParams();
  return (
    <>
      <Text typo="body1">
        {studyName}
        {currentWeek}주차
      </Text>
    </>
  );
};

export default StudyInfo;
