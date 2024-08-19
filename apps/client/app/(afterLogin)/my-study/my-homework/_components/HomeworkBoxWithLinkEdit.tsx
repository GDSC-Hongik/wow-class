"use client";

import { Space, Text } from "@wow-class/ui";
import { tags } from "constants/tags";
import { revalidateTag } from "next/cache";
import type { SubmittableAssignment } from "types/dtos/study-detail-dashboard";
import { Link, Reload } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

interface HomeworkOverviewBoxProps {
  assignments: SubmittableAssignment[];
  repositoryLink: string;
}
export const HomeworkBoxWithLinkEdit = ({
  assignments,
  repositoryLink,
}: HomeworkOverviewBoxProps) => {
  const handleClickSubmissionComplete = async () => {
    revalidateTag(tags.studyDetailDashboard);
  };
  return (
    <>
      {assignments.map((assignment) => (
        <Box
          key={assignment.studyDetailId}
          text={
            <>
              <Text color="primary" typo="label2">
                {assignment.week}주차
              </Text>
              <Space height={16} />
              <Text as="h2" typo="h2">
                {assignment.title}
              </Text>
              <TextButton
                as="a"
                href={assignment.descriptionLink}
                style={{ paddingLeft: "0px", width: "fit-content" }}
                text="과제 명세 확인"
              />
              <Space height="xs" />
              <Text color="sub">종료 일시 : {assignment.deadline}</Text>

              <Space height={26} />
              <Button
                as="a"
                disabled={!repositoryLink}
                href={assignment.submissionLink}
                icon={<Link stroke="primary" />}
                style={{ maxWidth: "100%" }}
                variant="outline"
              >
                제출하러 가기
              </Button>
              <Space height={8} />
              <Button
                disabled={!repositoryLink}
                icon={<Reload />}
                style={{ maxWidth: "100%" }}
                onClick={handleClickSubmissionComplete}
              >
                제출 완료
              </Button>
            </>
          }
        />
      ))}
    </>
  );
};
