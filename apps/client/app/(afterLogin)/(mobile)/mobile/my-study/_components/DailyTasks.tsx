import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import type { DailyTaskListDtoType } from "types/dtos/myStudy";
import type { DailyTaskType } from "types/entities/myStudy";

import DailyTaskItem from "./DailyTaskItem";

const mockAssignmentTaskData: DailyTaskListDtoType<DailyTaskType> = [
  {
    studyDetailId: 1,
    week: 2,
    taskType: "ATTENDANCE",
    deadLine: "2025-01-15T23:59:59Z",
    attendanceStatus: "BEFORE_ATTENDANCE", // Example value, assuming "PRESENT" is part of AttendanceStatusType
    assignmentSubmissionStatus: "SUCCESS",
    assignmentTitle: "sdf",
  },
  {
    studyDetailId: 2,
    week: 3,
    taskType: "ASSIGNMENT",
    deadLine: "2025-01-20T23:59:59Z",
    assignmentTitle: "Math Homework 1",
    attendanceStatus: "ATTENDED",
    assignmentSubmissionStatus: "SUCCESS", // Must be either "FAILURE" or "SUCCESS
  },
  {
    studyDetailId: 2,
    week: 3,
    taskType: "ASSIGNMENT",
    deadLine: "2025-01-20T23:59:59Z",
    assignmentTitle: "Math Homework 1",
    attendanceStatus: "ATTENDED",
    assignmentSubmissionStatus: "SUCCESS", // Must be either "FAILURE" or "SUCCESS
  },
  {
    studyDetailId: 2,
    week: 3,
    taskType: "ASSIGNMENT",
    deadLine: "2025-01-20T23:59:59Z",
    assignmentTitle: "Math Homework 1",
    attendanceStatus: "ATTENDED",
    assignmentSubmissionStatus: "SUCCESS", // Must be either "FAILURE" or "SUCCESS
  },
];

const DailyTasks = async () => {
  const myOngoingStudyData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyData?.studyId) {
    return null;
  }

  const dailyTaskData = await myStudyApi.getDailyTaskList(
    myOngoingStudyData?.studyId
  );

  const data = mockAssignmentTaskData;
  return (
    <>
      <Text typo="h2">오늘의 할 일</Text>
      <Space height={14} />
      <Flex direction="column" gap="12px">
        {data.map((dailyTask, index) => (
          <DailyTaskItem
            dailyTask={dailyTask}
            index={index}
            key={dailyTask.studyDetailId}
          />
        ))}
      </Flex>
    </>
  );
};

export default DailyTasks;
