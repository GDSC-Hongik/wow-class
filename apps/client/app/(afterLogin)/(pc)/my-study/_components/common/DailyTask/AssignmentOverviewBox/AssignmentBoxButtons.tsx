"use client";

import { Space } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyDetailApi } from "apis/studyDetailApi";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import Link from "next/link";
import type { ComponentProps, CSSProperties } from "react";
import { toast } from "react-toastify";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { AssignmentHistoryStatusType } from "types/entities/common/assignment";
import type { DailyTaskType } from "types/entities/myStudy";
import { isDeadlinePassed } from "utils/isDeadlinePassed";
import { getNowIsAfterStartDate } from "utils/isValidDate";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Button from "wowds-ui/Button";

interface AssignmentBoxButtonsProps {
  assignmentHistory: StudyDetailTaskDto<DailyTaskType>["assignmentHistory"];
  assignmentHistoryStatus: StudyDetailTaskDto<DailyTaskType>["assignmentHistoryStatus"];
  buttonsDisabled: boolean;
  repositoryLink: string;
}

export const AssignmentBoxButtons = ({
  studyDetailTaskInfo,
}: {
  studyDetailTaskInfo: StudyDetailTaskDto<DailyTaskType>;
}) => {
  const { assignmentHistory, studySession, assignmentHistoryStatus } =
    studyDetailTaskInfo;
  const { assignmentPeriod } = studySession;
  const { repositoryLink } = studyDetailTaskInfo.studyHistory;

  const isAfterStartDate = getNowIsAfterStartDate(assignmentPeriod.startDate);
  const buttonsDisabled = !isAfterStartDate || !repositoryLink;

  return (
    <>
      <PrimaryButton
        assignmentHistory={assignmentHistory}
        assignmentHistoryStatus={assignmentHistoryStatus}
        buttonsDisabled={buttonsDisabled}
        repositoryLink={repositoryLink}
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
  repositoryLink,
}: Omit<
  AssignmentBoxButtonsProps,
  "deadline" | "studySessionId" | "assignmentPeriod"
>) => {
  const iconStroke = buttonsDisabled ? "mono100" : "primary";
  const { primaryButtonText } = buttonTextMap[assignmentHistoryStatus];

  let primaryButtonHref = repositoryLink;

  if (assignmentHistory) {
    const {
      submissionStatus: assignmentSubmissionStatus,
      submissionFailureType,
      submissionLink,
    } = assignmentHistory;

    if (
      assignmentSubmissionStatus === "FAILURE" &&
      submissionFailureType === "NOT_SUBMITTED"
    ) {
      return null;
    }

    if (assignmentHistoryStatus === "SUCCEEDED") {
      primaryButtonHref = submissionLink;
    }
  }

  return (
    <Button
      aria-label={primaryButtonText}
      asProp={Link}
      disabled={buttonsDisabled}
      href={primaryButtonHref ?? ""}
      icon={<LinkIcon height={20} stroke={iconStroke} width={20} />}
      rel="noopener"
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
  const iconStroke = buttonsDisabled ? "mono100" : "backgroundNormal";
  const { secondaryButtonText } = buttonTextMap[assignmentHistoryStatus];

  const handleSubmissionToast = async () => {
    const dailyTaskData = await studyDetailApi.getStudyDetailTaskList(studyId);
    if (!dailyTaskData) return;
    const currentAssignmentTask = dailyTaskData.find(
      (task) =>
        task.studySession.studySessionId === studySessionId &&
        task.todoType === "ASSIGNMENT"
    );
    const currentAssignmentSubmissionStatus =
      currentAssignmentTask?.assignmentHistory?.submissionStatus;
    if (currentAssignmentSubmissionStatus === "SUCCESS") {
      toast.success("과제 제출이 완료되었습니다.");
    } else if (currentAssignmentSubmissionStatus === "FAILURE") {
      toast.error("과제 제출에 실패했습니다.");
    }
  };

  const handleClickSubmissionComplete = async () => {
    const response = await studyHistoryApi.submitAssignment(studySessionId);
    if (response.success) {
      await revalidateTagByName(tags.myStudyDetailDailyTask);
      revalidateTagByName(tags.allStudyTaskList);
      handleSubmissionToast();
    }
  };

  const commonButtonProps: ComponentProps<typeof Button> = {
    style: buttonStyle,
    disabled: buttonsDisabled,
    icon: <ReloadIcon height={20} stroke={iconStroke} width={20} />,
    onClick: handleClickSubmissionComplete,
    children: secondaryButtonText,
  };

  //과제 제출 전 상태
  if (assignmentHistory === null) {
    return <Button {...commonButtonProps} />;
  }
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

  if (assignmentSubmissionStatus === "SUCCESS" && committedAt) {
    const { year, month, day, hours, minutes } = parseISODate(committedAt);
    commonButtonProps.subText = `최종 수정 일시 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;
  }

  return <Button {...commonButtonProps} />;
};

const buttonStyle: CSSProperties = {
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
