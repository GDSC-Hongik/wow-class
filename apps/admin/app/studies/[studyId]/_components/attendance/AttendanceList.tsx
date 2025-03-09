import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import type { AttendanceApiResponseDto } from "types/dtos/attendance";

import AttendanceItem from "./AttendanceItem";

const AttendanceList = async ({ studyId }: { studyId: string }) => {
  const attendanceList = await studyApi.getStudyAttendances(+studyId);

  return (
    <section>
      <Text typo="h2">회차별 출결번호</Text>
      <Space height={24} />
      <Flex align="center" gap="md" overflow="scroll">
        {attendanceList?.map((attendance: AttendanceApiResponseDto, index) => (
          <AttendanceItem
            attendance={attendance}
            key={`${attendance.studyDetailId}-${index}`}
          />
        ))}
      </Flex>
    </section>
  );
};

export default AttendanceList;
