"use client";

import { Space, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { tags } from "constants/tags";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import type { SubmittableAssignment } from "types/dtos/study-detail-dashboard";
import { Link as LinkIcon, Reload as ReloadIcon } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

interface HomeworkBoxWithLinkEditProps {
  assignments: SubmittableAssignment[];
  repositoryLink: string;
}
export const HomeworkBoxWithLinkEdit = ({
  assignments,
  repositoryLink,
}: HomeworkBoxWithLinkEditProps) => {
  const handleClickSubmissionComplete = async () => {
    revalidateTag(tags.studyDetailDashboard);
  };

  const isButtonDisabled = !repositoryLink;
  return (
    <>
      {assignments.map(
        ({
          studyDetailId,
          week,
          title,
          deadline,
          descriptionLink,
          submissionLink,
        }) => {
          const { year, month, day, hours, minutes } = parseISODate(deadline);

          const deadlineText = `종료일시: ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}까지`;

          return (
            <Box
              key={studyDetailId}
              text={
                <>
                  <Text color="primary" typo="label2">
                    {week}주차
                  </Text>
                  <Space height={16} />
                  <Text as="h2" typo="h2">
                    {title}
                  </Text>
                  <Link href={descriptionLink} target="_blank">
                    <TextButton
                      style={{ paddingLeft: "0px" }}
                      text="과제 명세 확인"
                    />
                  </Link>
                  <Space height="xs" />
                  <Text color="sub">{deadlineText}</Text>
                  <Space height={26} />
                  <Link href={submissionLink} target="_blank">
                    <Button
                      disabled={isButtonDisabled}
                      style={{ maxWidth: "100%" }}
                      variant="outline"
                      icon={
                        <LinkIcon
                          stroke={isButtonDisabled ? "mono100" : "primary"}
                        />
                      }
                    >
                      제출하러 가기
                    </Button>
                  </Link>
                  <Space height={8} />
                  <Button
                    disabled={isButtonDisabled}
                    style={{ maxWidth: "100%" }}
                    icon={
                      <ReloadIcon
                        stroke={
                          isButtonDisabled ? "mono100" : "backgroundNormal"
                        }
                      />
                    }
                    onClick={handleClickSubmissionComplete}
                  >
                    제출 완료
                  </Button>
                </>
              }
            />
          );
        }
      )}
    </>
  );
};
