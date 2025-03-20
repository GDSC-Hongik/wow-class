import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import type { StudySessionApiResponseV2Dto } from "types/dtos/studyList";

import AttendanceItem from "./AttendanceItem";

const AttendanceList = ({
  studySessions,
}: {
  studySessions?: StudySessionApiResponseV2Dto[];
}) => {
  return (
    <section>
      <Text typo="h2">회차별 출결번호</Text>
      <Space height={24} />
      <Flex align="center" gap="md" overflow="scroll">
        {studySessions?.map((data, index) => (
          <AttendanceItem
            attendanceNumber={data.lessonAttendanceNumber}
            deadLine={data.lessonPeriod.endDate}
            key={`${data.studySessionId}-${index}`}
            round={index + 1}
            studySessionId={data.studySessionId}
          />
        ))}
      </Flex>
    </section>
  );
};

export default AttendanceList;
