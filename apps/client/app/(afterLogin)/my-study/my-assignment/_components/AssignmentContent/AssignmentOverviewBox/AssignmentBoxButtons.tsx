"use client";

import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { studyDetailApi } from "apis/studyDetailApi";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Assignment } from "types/dtos/studyDetail";
import type { AssignmentSubmissionStatusType } from "types/entities/common/assignment";
import { getIsAfterStartDate } from "utils/getIsAfterStartDate";
import { isDeadlinePassed } from "utils/isDeadlinePassed";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Button from "wowds-ui/Button";
interface AssignmentBoxButtonsProps {
  assignment: Assignment;
  buttonsDisabled?: boolean;
}

export const AssignmentBoxButtons = ({
  buttonsDisabled: buttonDisabledProp,
  assignment,
}: AssignmentBoxButtonsProps) => {
  const [startDate, setStartDate] = useState("");

  const targetWeek = assignment.week;

  useEffect(() => {
    const fetchAssignmentStartDate = async () => {
      const ongoingStudyInfo = await myStudyApi.getMyOngoingStudyInfo();

      if (ongoingStudyInfo?.studyId) {
        const curriculumData = await myStudyApi.getStudyCurriculumList(
          ongoingStudyInfo.studyId
        );

        const matchingWeek = curriculumData?.find(
          (item) => item.week === targetWeek
        );

        if (matchingWeek) {
          setStartDate(matchingWeek.period.startDate);
        }
      }
    };

    fetchAssignmentStartDate();
  }, [targetWeek]);

  const buttonsDisabled = buttonDisabledProp || !getIsAfterStartDate(startDate);

  return (
    <>
      <PrimaryButton
        assignment={assignment}
        buttonsDisabled={buttonsDisabled}
      />
      <Space height={8} />
      <SecondaryButton
        assignment={assignment}
        buttonsDisabled={buttonsDisabled}
      />
    </>
  );
};
const PrimaryButton = ({
  assignment,
  buttonsDisabled,
}: AssignmentBoxButtonsProps) => {
  const [repositoryLink, setRepositoryLink] = useState("");

  useEffect(() => {
    const fetchStudyDashBoard = async () => {
      const ongoingStudyInfo = await myStudyApi.getMyOngoingStudyInfo();
      if (!ongoingStudyInfo) {
        return;
      }
      const studyDashboard = await studyDetailApi.getStudyDetailDashboard(
        ongoingStudyInfo.studyId
      );

      if (!studyDashboard) {
        return;
      } else {
        setRepositoryLink(studyDashboard.repositoryLink);
      }
    };

    fetchStudyDashBoard();
  }, []);

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
  const link =
    assignmentSubmissionStatus === null ? repositoryLink : submissionLink;

  return (
    <Button
      asProp={Link}
      disabled={buttonsDisabled}
      href={link ?? ""}
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
}: AssignmentBoxButtonsProps) => {
  const { assignmentSubmissionStatus, studyDetailId, deadline, committedAt } =
    assignment;
  const { secondaryButtonText } =
    assignmentSubmissionStatus === null
      ? buttonTextMap.INITIAL
      : buttonTextMap[assignmentSubmissionStatus];
  const handleClickSubmissionComplete = async () => {
    const response = await studyHistoryApi.submitAssignment(studyDetailId);
    if (response.success) {
      //TODO: 과제 제출 이후에는 과제 상태에 대한 업데이트 필요
      //이번주 과제 조회 api, 대시보드 api revaliate
      revalidateTagByName(
        assignmentSubmissionStatus === null
          ? tags.studyDetailDashboard
          : tags.upcomingStudy
      );
      revalidateTagByName(tags.studyHistory);
    }
  };

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

const buttonStyle = {
  maxWidth: "100%",
  height: "48px !important",
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
