"use client";

import { Space } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyDetailApi } from "apis/studyDetailApi";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import { useAtom } from "jotai";
import Link from "next/link";
import { toast } from "react-toastify";
import type {
  AssignmentHistory,
  StudyDetailTaskDto,
} from "types/dtos/studyDetail";
import type {
  AssignmentHistoryStatusType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";
import type { PeriodType } from "types/entities/common/period";
import type { DailyTaskType } from "types/entities/myStudy";
import { isDeadlinePassed } from "utils/isDeadlinePassed";
import { getNowIsAfterStartDate } from "utils/isValidDate";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Button from "wowds-ui/Button";

import { githubLinkAtom } from "../../../_contexts/atoms";

interface AssignmentBoxButtonsProps {
  assignmentHistory: AssignmentHistory;
  assignmentHistoryStatus: AssignmentHistoryStatusType;
  buttonsDisabled: boolean;
}

export const AssignmentBoxButtons = ({
  studyDetailTaskInfo,
}: {
  studyDetailTaskInfo: StudyDetailTaskDto<DailyTaskType>;
}) => {
  const [githubLink] = useAtom(githubLinkAtom);
  const { assignmentHistory, studySession, assignmentHistoryStatus } =
    studyDetailTaskInfo;
  const { assignmentPeriod } = studySession;

  const isAfterStartDate = getNowIsAfterStartDate(assignmentPeriod.startDate);
  const buttonsDisabled = !isAfterStartDate || !githubLink;

  return (
    <>
      <PrimaryButton
        assignmentHistory={assignmentHistory}
        assignmentHistoryStatus={assignmentHistoryStatus}
        buttonsDisabled={buttonsDisabled}
      />
      <Space height={8} />
      <SecondaryButton
        buttonsDisabled={buttonsDisabled}
        studyDetailTaskInfo={studyDetailTaskInfo}
      />
    </>
  );
};
const PrimaryButton = ({
  assignmentHistory,
  assignmentHistoryStatus,
  buttonsDisabled,
}: Omit<
  AssignmentBoxButtonsProps,
  "deadline" | "studySessionId" | "assignmentPeriod"
>) => {
  const [githubLink] = useAtom(githubLinkAtom);
  const {
    submissionStatus: assignmentSubmissionStatus,
    submissionFailureType,
    submissionLink,
  } = assignmentHistory;
  const { primaryButtonText } = buttonTextMap[assignmentHistoryStatus];

  if (
    assignmentSubmissionStatus === "FAILURE" &&
    submissionFailureType === "NOT_SUBMITTED"
  ) {
    return;
  }

  const iconStroke = buttonsDisabled ? "mono100" : "primary";
  const primaryButtonHref =
    assignmentHistoryStatus === "SUCCEEDED" ? submissionLink : githubLink;
  return (
    <Button
      asProp={Link}
      disabled={buttonsDisabled}
      href={primaryButtonHref ?? ""}
      icon={<LinkIcon height={20} stroke={iconStroke} width={20} />}
      style={buttonStyle}
      target="_blank"
      variant="outline"
    >
      {primaryButtonText}
    </Button>
  );
};

const SecondaryButton = ({
  studyDetailTaskInfo,
  buttonsDisabled,
}: {
  studyDetailTaskInfo: StudyDetailTaskDto<DailyTaskType>;
} & {
  buttonsDisabled: boolean;
}) => {
  const { assignmentHistory, studySession, assignmentHistoryStatus, deadLine } =
    studyDetailTaskInfo;
  const { studyId, studySessionId } = studySession;

  const {
    submissionStatus: assignmentSubmissionStatus,
    committedAt,
    submissionFailureType,
  } = assignmentHistory;

  if (isDeadlinePassed(deadLine) || submissionFailureType === "NOT_SUBMITTED") {
    return (
      <Button disabled={true} style={buttonStyle}>
        마감
      </Button>
    );
  }
  const { secondaryButtonText } = buttonTextMap[assignmentHistoryStatus];

  const handleClickSubmissionComplete = async () => {
    const response = await studyHistoryApi.submitAssignment(studySessionId);
    if (response.success) {
      await revalidateTagByName(tags.myStudyDetailDailyTask);
      // const dailyTaskData = await myStudyApi.getStudyDetailTaskList(studyId);
      // const currentAssignmentTask = dasilyTaskData.find(
      //   (task) => task.studySession.studySessionId === studySessionId && task.todoType === "ASSIGNMENT");
      // const currentAssignmentSubmissionStatus = currentAssignmentTask?.assignmentHistory.submissionStatus;
      // if (currentAssignmentSubmissionStatus === "SUCCESS") {
      //   toast.success("과제 제출이 완료되었습니다.");
      // } else if (currentAssignmentSubmissionStatus === "FAILURE") {
      //   toast.error("과제 제출에 실패했습니다.");
      // }
    }
  };

  const stroke = buttonsDisabled ? "mono100" : "backgroundNormal";
  const { year, month, day, hours, minutes } = parseISODate(
    committedAt as string
  );
  const commitText = `최종 수정 일시 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

  return (
    <Button
      disabled={buttonsDisabled}
      icon={<ReloadIcon height={20} stroke={stroke} width={20} />}
      style={buttonStyle}
      {...(assignmentSubmissionStatus === "SUCCESS" &&
        committedAt && {
          subText: commitText,
        })}
      onClick={handleClickSubmissionComplete}
    >
      {secondaryButtonText}
    </Button>
  );
};

const buttonStyle = {
  maxWidth: "100%",
  height: "fit-content",
};

const buttonTextMap: Record<
  AssignmentHistoryStatusType,
  { primaryButtonText: string; secondaryButtonText: string }
> = {
  BEFORE_SUBMISSION: {
    primaryButtonText: "제출하러 가기",
    secondaryButtonText: "제출 완료하기",
  },
  SUCCEEDED: {
    primaryButtonText: "제출한 과제 보러가기",
    secondaryButtonText: "제출 갱신하기",
  },
  FAILED: {
    primaryButtonText: "제출한 과제 보러가기",
    secondaryButtonText: "제출 완료하기",
  },
};
