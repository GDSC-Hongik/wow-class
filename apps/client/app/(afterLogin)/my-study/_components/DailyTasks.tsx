import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import type {
  AttendanceStatusType,
  HomeworkSubmissionStatusType,
} from "types/entities/myStudy";

import AttendanceStatusBox from "./AttendanceStatusBox";
import DailyTaskCarousel from "./DailyTaskCarousel";
import HomeworkStatusBox from "./HomeworkStatusBox";

interface AttendanceTask {
  type: "ATTENDANCE";
  week: number;
  period: {
    start: string;
    end: string;
  };
  attendanceStatus: AttendanceStatusType;
}

interface HomeworkTask {
  type: "HOMEWORK";
  week: number;
  name: string;
  deadline: string;
  homeworkSubmissionStatus: HomeworkSubmissionStatusType;
}

type DataType = AttendanceTask | HomeworkTask;

const mockData: DataType[] = [
  {
    type: "ATTENDANCE",
    week: 4,
    period: {
      start: "2024-08-18T17:13:29.913Z",
      end: "2024-08-18T23:59:29.913Z",
    },
    attendanceStatus: "ATTENDED",
  },
  {
    type: "HOMEWORK",
    week: 3,
    name: "과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름",
    deadline: "2024-08-18T17:13:29.913Z",
    homeworkSubmissionStatus: "SUBMITTED",
  },
  {
    type: "HOMEWORK",
    week: 2,
    name: "과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름",
    deadline: "2024-08-18T17:13:29.913Z",
    homeworkSubmissionStatus: "NOT_SUBMITTED",
  },
  {
    type: "HOMEWORK",
    week: 1,
    name: "과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름",
    deadline: "2024-08-18T17:13:29.913Z",
    homeworkSubmissionStatus: "SUBMITTED",
  },
];

const DailyTasks = () => {
  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        <DailyTaskCarousel>
          {mockData.map((dailyTask, index) => {
            const { type } = dailyTask;

            return type === "ATTENDANCE" ? (
              <AttendanceStatusBox
                attendanceStatus={dailyTask.attendanceStatus}
                key={index}
                period={dailyTask.period}
                week={dailyTask.week}
              />
            ) : (
              <HomeworkStatusBox
                deadline={dailyTask.deadline}
                homeworkSubmissionStatus={dailyTask.homeworkSubmissionStatus}
                key={index}
                name={dailyTask.name}
                week={dailyTask.week}
              />
            );
          })}
        </DailyTaskCarousel>
      </Flex>
    </section>
  );
};

export default DailyTasks;
