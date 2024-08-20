"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { tags } from "constants/tags";
import { revalidateTag } from "next/cache";
import Link from "next/dist/client/link";
import Image from "next/image";
import type { SubmittableAssignment } from "types/dtos/study-detail-dashboard";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

interface HomeworkOverviewBoxProps {
  assignments: SubmittableAssignment[];
}
export const HomeworkOverviewBox = ({
  assignments,
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
              <Flex gap="xs">
                <Text as="h2" typo="h2">
                  {assignment.title}
                </Text>
                <Tag color="blue" variant="solid2">
                  {assignment.assignmentSubmissionStatus}
                </Tag>
              </Flex>
              <Link href={assignment.descriptionLink} target="_blank">
                <TextButton
                  style={{ paddingLeft: "0px" }}
                  text="과제 명세 확인"
                />
              </Link>
              <Space height="xs" />
              <Text color="sub">종료 일시 : {assignment.deadline}</Text>
              <Flex gap="xs">
                <Text as="div" color="sub">
                  제출한 과제
                  <Text as="span" color="textBlack">
                    {assignment.title}
                  </Text>
                </Text>
                <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
                <styled.div color="primary">
                  {assignment.assignmentSubmissionStatus === "FAILURE"
                    ? assignment.submissionFailureType
                    : "글자수 충족"}
                </styled.div>
              </Flex>
              <Space height={26} />
              <Link href={assignment.submissionLink} target="_blank">
                <Button
                  icon={<LinkIcon stroke="primary" />}
                  style={{ maxWidth: "100%" }}
                  variant="outline"
                >
                  제출하러 가기
                </Button>
              </Link>
              <Space height={8} />
              <Button
                icon={<ReloadIcon />}
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
