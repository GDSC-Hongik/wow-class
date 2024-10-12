"use client";

import { Space } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyDetailApi } from "apis/studyDetailApi";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import Link from "next/link";
import { toast } from "react-toastify";
import type { Assignment } from "types/dtos/studyDetail";
import type { AssignmentSubmissionStatusType } from "types/entities/common/assignment";
import { isDeadlinePassed } from "utils/isDeadlinePassed";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Button from "wowds-ui/Button";
interface AssignmentBoxButtonsProps {
  assignment: Assignment;
  repositoryLink?: string;
  buttonsDisabled?: boolean;
  studyId: number;
}

export const AssignmentBoxButtons = ({
  buttonsDisabled,
  assignment,
  repositoryLink,
  studyId,
}: AssignmentBoxButtonsProps) => {
  return (
    <>
      <PrimaryButton
        assignment={assignment}
        buttonsDisabled={buttonsDisabled}
        repositoryLink={repositoryLink}
      />
      <Space height={8} />
      <SecondaryButton
        assignment={assignment}
        buttonsDisabled={buttonsDisabled}
        key={assignment.assignmentSubmissionStatus}
        studyId={studyId}
      />
    </>
  );
};
const PrimaryButton = ({
  assignment,
  buttonsDisabled,
  repositoryLink,
}: Omit<AssignmentBoxButtonsProps, "studyId">) => {
  const { assignmentSubmissionStatus, submissionFailureType, submissionLink } =
    assignment;
  const { primaryButtonText } =
    assignmentSubmissionStatus === null
      ? buttonTextMap.INITIAL
      : buttonTextMap[assignmentSubmissionStatus];

  if (
    assignmentSubmissionStatus === "FAILURE" &&
    submissionFailureType === "NOT_SUBMITTED"
  ) {
    return;
  }
  const stroke = buttonsDisabled ? "mono100" : "primary";
  const primaryButtonHref =
    assignmentSubmissionStatus === "SUCCESS" ? submissionLink : repositoryLink;
  return (
    <Button
      asProp={Link}
      disabled={buttonsDisabled}
      href={primaryButtonHref ?? ""}
      icon={<LinkIcon height={20} stroke={stroke} width={20} />}
      style={buttonStyle}
      target="_blank"
      variant="outline"
    >
      {primaryButtonText}
    </Button>
  );
};

const SecondaryButton = ({
  assignment,
  buttonsDisabled,
  studyId,
}: Omit<AssignmentBoxButtonsProps, "repositoryLink">) => {
  const { assignmentSubmissionStatus, studyDetailId, deadline, committedAt } =
    assignment;

  if (isDeadlinePassed(deadline)) {
    return (
      <Button disabled={true} style={buttonStyle}>
        마감
      </Button>
    );
  }
  const { secondaryButtonText } =
    assignmentSubmissionStatus === null
      ? buttonTextMap.INITIAL
      : buttonTextMap[assignmentSubmissionStatus];

  const fetchStudyDashboard = async () => {
    const studyDashboard =
      await studyDetailApi.getStudyDetailDashboard(studyId);
    return studyDashboard;
  };

  const handleClickSubmissionComplete = async () => {
    const response = await studyHistoryApi.submitAssignment(studyDetailId);
    if (response.success) {
      await revalidateTagByName(tags.studyDetailDashboard);
      await revalidateTagByName(tags.studyHistory);
      const fetchedStudyDashBoardData = await fetchStudyDashboard();
      const currentAssignmentSubmissionStatus =
        fetchedStudyDashBoardData?.submittableAssignments.filter(
          (item) => item.studyDetailId === studyDetailId
        )[0]?.assignmentSubmissionStatus;

      if (currentAssignmentSubmissionStatus === "SUCCESS") {
        toast.success("과제 제출이 완료되었습니다.");
      } else if (currentAssignmentSubmissionStatus === "FAILURE") {
        toast.error("과제 제출에 실패했습니다.");
      }
    }
  };

  const stroke = buttonsDisabled ? "mono100" : "backgroundNormal";
  const { year, month, day, hours, minutes } = parseISODate(
    committedAt as string
  );
  const commitText = `최종 수정일자 ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

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
  NonNullable<AssignmentSubmissionStatusType>,
  { primaryButtonText: string; secondaryButtonText: string }
> & {
  INITIAL: { primaryButtonText: string; secondaryButtonText: string };
} = {
  INITIAL: {
    primaryButtonText: "제출하러 가기",
    secondaryButtonText: "제출 완료하기",
  },
  SUCCESS: {
    primaryButtonText: "제출한 과제 보러가기",
    secondaryButtonText: "제출 갱신하기",
  },
  FAILURE: {
    primaryButtonText: "제출한 과제 보러가기",
    secondaryButtonText: "제출 완료하기",
  },
};
