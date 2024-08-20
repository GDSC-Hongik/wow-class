"use client";

import { Space } from "@wow-class/ui";
import { tags } from "constants/tags";
import { revalidateTag } from "next/cache";
import Link from "next/dist/client/link";
import type { Assignment } from "types/dtos/study-detail-dashboard";
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
  const handleClickSubmissionComplete = async () => {
    revalidateTag(tags.studyDetailDashboard);
  };

  const getButtonProps = () => {
    if (assignment.assignmentSubmissionStatus === "PENDING") {
      return {
        primaryButtonText: "제출하러 가기",
        secondaryButtonText: "제출 완료하기",
        icon: (
          <ReloadIcon
            stroke={buttonsDisabled ? "mono100" : "backgroundNormal"}
          />
        ),
      };
    } else if (assignment.assignmentSubmissionStatus === "SUCCESS") {
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
      assignment.assignmentSubmissionStatus === "FAILURE" &&
      assignment.submissionFailureType === "NOT_SUBMITTED"
    ) {
      return null;
    } else
      return (
        <Link href={assignment.submissionLink} target="_blank">
          <Button
            disabled={buttonsDisabled}
            icon={<LinkIcon stroke={buttonsDisabled ? "mono100" : "primary"} />}
            style={buttonStyle}
            variant="outline"
          >
            {text}
          </Button>
        </Link>
      );
  };

  const renderSecondaryButton = (text: string, icon: JSX.Element) => {
    if (isDeadlinePassed(assignment.deadline)) {
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
        {...(assignment.assignmentSubmissionStatus === "SUCCESS" &&
          "committedAt" in assignment && {
            subText: `최종 수정일자 ${assignment?.committedAt}`,
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

const isDeadlinePassed = (deadline: string) => {
  const now = new Date();
  const deadlineDate = new Date(deadline);

  return now > deadlineDate;
};

const buttonStyle = {
  maxWidth: "100%",
};
