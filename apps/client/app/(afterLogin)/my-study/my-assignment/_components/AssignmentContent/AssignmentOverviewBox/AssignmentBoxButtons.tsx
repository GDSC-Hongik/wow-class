"use client";

import { Space } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import Link from "next/link";
import type { Assignment } from "types/dtos/studyDetail";
import type { AssignmentSubmissionStatusType } from "types/entities/common/assignment";
import { isDeadlinePassed } from "utils";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Button from "wowds-ui/Button";

interface AssignmentButtonsProps {
  assignment: Assignment;
  buttonsDisabled?: boolean;
}

export const AssignmentBoxButtons = ({
  assignment,
  buttonsDisabled = false,
}: AssignmentButtonsProps) => {
  const {
    assignmentSubmissionStatus,
    submissionFailureType,
    submissionLink,
    deadline,
    committedAt,
    studyDetailId,
  } = assignment;

  const handleClickSubmissionComplete = async () => {
    const response = await studyHistoryApi.submitAssignment(studyDetailId);
    if (response.success) {
      //TODO: 과제 제출 이후에는 과제 상태에 대한 업데이트 필요
      //이번주 과제 조회 api, 대시보드 api revaliate
      revalidateTagByName(tags.studyDetailDashboard);
    }
  };

  const { primaryButtonText, secondaryButtonText } =
    buttonProps[assignmentSubmissionStatus];

  const PrimaryButton = () => {
    if (
      assignmentSubmissionStatus === "FAILURE" &&
      submissionFailureType === "NOT_SUBMITTED"
    ) {
      return;
    }
    const stroke = buttonsDisabled ? "mono100" : "primary";
    return (
      <Link href={submissionLink} target="_blank">
        <Button
          disabled={buttonsDisabled}
          icon={<LinkIcon height={20} stroke={stroke} width={20} />}
          style={buttonStyle}
          variant="outline"
        >
          {primaryButtonText}
        </Button>
      </Link>
    );
  };

  const SecondaryButton = () => {
    if (isDeadlinePassed(deadline)) {
      return (
        <Button disabled={true} style={buttonStyle}>
          마감
        </Button>
      );
    }
    const stroke = buttonsDisabled ? "mono100" : "backgroundNormal";
    return (
      <Button
        disabled={buttonsDisabled}
        icon={<ReloadIcon height={20} stroke={stroke} width={20} />}
        style={buttonStyle}
        {...(assignmentSubmissionStatus === "SUCCESS" &&
          committedAt && {
            subText: `최종 수정일자 ${committedAt}`,
          })}
        onClick={handleClickSubmissionComplete}
      >
        {secondaryButtonText}
      </Button>
    );
  };

  return (
    <>
      <PrimaryButton />
      <Space height={8} />
      <SecondaryButton />
    </>
  );
};

const buttonStyle = {
  maxWidth: "100%",
};

const buttonProps: Record<
  AssignmentSubmissionStatusType,
  { primaryButtonText: string; secondaryButtonText: string }
> = {
  PENDING: {
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
