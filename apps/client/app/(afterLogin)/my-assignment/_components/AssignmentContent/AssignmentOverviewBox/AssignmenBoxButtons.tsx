"use client";

import { Space } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import Link from "next/link";
import type { Assignment } from "types/dtos/studyDetail";
import { isDeadlinePassed } from "utils";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Button from "wowds-ui/Button";

interface AssignmentButtonsProps {
  assignment: Assignment;
  buttonsDisabled?: boolean;
}

export const AssignmentButtons = ({
  assignment,
  buttonsDisabled,
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

  const getButtonProps = () => {
    if (assignmentSubmissionStatus === "PENDING") {
      const stroke = buttonsDisabled ? "mono100" : "backgroundNormal";
      return {
        primaryButtonText: "제출하러 가기",
        secondaryButtonText: "제출 완료하기",
        icon: <ReloadIcon stroke={stroke} />,
      };
    } else if (assignmentSubmissionStatus === "SUCCESS") {
      return {
        primaryButtonText: "제출한 과제 보러가기",
        secondaryButtonText: "제출 갱신하기",
        icon: <ReloadIcon />,
      };
    } else {
      return {
        primaryButtonText: "제출한 과제 보러가기",
        secondaryButtonText: "제출 완료하기",
        icon: <ReloadIcon />,
      };
    }
  };

  const renderPrimaryButton = (text: string) => {
    if (
      assignmentSubmissionStatus === "FAILURE" &&
      submissionFailureType === "NOT_SUBMITTED"
    ) {
      return null;
    }
    const stroke = buttonsDisabled ? "mono100" : "primary";
    return (
      <Link href={submissionLink} target="_blank">
        <Button
          disabled={buttonsDisabled}
          icon={<LinkIcon stroke={stroke} />}
          style={buttonStyle}
          variant="outline"
        >
          {text}
        </Button>
      </Link>
    );
  };

  const renderSecondaryButton = (text: string, icon: JSX.Element) => {
    if (isDeadlinePassed(deadline)) {
      return (
        <Button disabled={true} style={buttonStyle}>
          마감
        </Button>
      );
    }
    return (
      <Button
        disabled={buttonsDisabled}
        icon={icon}
        style={buttonStyle}
        {...(assignmentSubmissionStatus === "SUCCESS" &&
          committedAt && {
            subText: `최종 수정일자 ${committedAt}`,
          })}
        onClick={handleClickSubmissionComplete}
      >
        {text}
      </Button>
    );
  };

  const { primaryButtonText, secondaryButtonText, icon } = getButtonProps();

  return (
    <>
      {renderPrimaryButton(primaryButtonText)}
      <Space height={8} />
      {renderSecondaryButton(secondaryButtonText, icon)}
    </>
  );
};

const buttonStyle = {
  maxWidth: "100%",
};
