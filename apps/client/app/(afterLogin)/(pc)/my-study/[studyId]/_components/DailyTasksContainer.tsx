import { studyDetailApi } from "apis/studyDetailApi";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";

import DailyTaskList from "../../_components/common/DailyTask/DailyTaskList";

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
const DailyTasksContainer = async ({ studyId }: DailyTasksProps) => {
  //const dailyTaskData = await studyDetailApi.getStudyDetailTaskList(studyId);

  return (
    <>
      <DailyTaskList dailyTask={exampleArray} />
    </>
  );
};

export default DailyTasksContainer;
