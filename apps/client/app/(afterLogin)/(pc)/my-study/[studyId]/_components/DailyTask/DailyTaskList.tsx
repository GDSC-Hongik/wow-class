import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import Image from "next/image";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";

import DailyTaskCarousel from "./DailyTaskCarousel";
import DailyTaskItem from "./DailyTaskItem";

const exampleArray: StudyDetailTaskDto<DailyTaskType>[] = [
  {
    studySession: {
      studySessionId: 0,
      position: 0,
      lessonTitle: "string",
      description: "string",
      lessonPeriod: {
        startDate: "2025-03-18T02:41:04.28",
        endDate: "2025-03-18T02:41:04.28",
      },
      assignmentTitle: "string",
      assignmentDescriptionLink: "string",
      assignmentPeriod: {
        startDate: "2025-03-18T02:41:04.28",
        endDate: "2025-03-19T02:41:04.28",
      },
      studyId: 0,
    },
    todoType: "ATTENDANCE",
    deadLine: "2025-03-19T19:41:04.28",
    attendanceStatus: "NOT_LIVE",
    assignmentHistory: {
      assignmentHistoryId: 0,
      submissionStatus: "SUCCESS",
      submissionFailureType: "NONE",
      contentLength: 0,
      submissionLink: "string",
      commitHash: "string",
      committedAt: "2025-03-18T02:41:04.28",
      studySessionId: 0,
      memberId: 0,
    },
    assignmentHistoryStatus: "SUCCEEDED",
  },
  {
    studySession: {
      studySessionId: 0,
      position: 0,
      lessonTitle: "string",
      description: "string",
      lessonPeriod: {
        startDate: "2025-03-18T02:41:04.28",
        endDate: "2025-03-18T02:41:04.28",
      },
      assignmentTitle: "string",
      assignmentDescriptionLink: "string",
      assignmentPeriod: {
        startDate: "2025-03-18T02:41:04.28",
        endDate: "2025-03-19T02:41:04.28",
      },
      studyId: 0,
    },
    todoType: "ASSIGNMENT",
    deadLine: "2025-03-19T19:41:04.28",
    attendanceStatus: "NOT_LIVE",
    assignmentHistory: {
      assignmentHistoryId: 0,
      submissionStatus: "SUCCESS",
      submissionFailureType: "NONE",
      contentLength: 0,
      submissionLink: "string",
      commitHash: "string",
      committedAt: "2025-03-18T02:41:04.28",
      studySessionId: 0,
      memberId: 0,
    },
    assignmentHistoryStatus: "SUCCEEDED",
  },
];
interface DailyTasksProps {
  studyId: number;
}
const DailyTasks = async ({ studyId }: DailyTasksProps) => {
  //const dailyTaskData = await myStudyApi.getStudyDetailTaskList(studyId);

  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        {exampleArray?.length ? (
          <DailyTaskCarousel>
            {exampleArray?.map((dailyTask, index) => (
              <DailyTaskItem
                dailyTask={dailyTask}
                index={index}
                key={dailyTask.studySession.studySessionId}
              />
            ))}
          </DailyTaskCarousel>
        ) : (
          <Flex alignItems="center" direction="column" gap={24} paddingY={38}>
            <Image
              alt="empty-study"
              height={140}
              src="/images/empty.svg"
              width={186}
            />
            <Text as="h2" color="sub" typo="h2">
              아직 할 일이 없어요.
            </Text>
          </Flex>
        )}
      </Flex>
    </section>
  );
};

export default DailyTasks;
