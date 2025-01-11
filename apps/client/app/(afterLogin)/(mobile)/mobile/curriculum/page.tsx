import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { attendanceStatusMap } from "constants/attendanceStatusMap";
import { routePath } from "constants/routePath";
import Link from "next/link";
import type { ComponentProps } from "react";
import type {
  AssignmentSubmissionStatusType,
  StudyDifficultyType,
} from "types/entities/myStudy";
import Tag from "wowds-ui/Tag";

const MobileStudyCurriculumPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }

  const studyCurriculumData = await myStudyApi.getStudyCurriculumList(
    myOngoingStudyInfoData?.studyId
  );

  return (
    <section aria-label="study-curriculum">
      <Text typo="h1">커리큘럼</Text>
      <Space height={40} />
      <Flex direction="column" gap="12px">
        {studyCurriculumData?.map(
          (
            {
              week,
              title,
              description,
              difficulty,
              attendanceStatus,
              assignmentStatus,
              assignmentSubmissionStatus,
              curriculumStatus,
            },
            index
          ) => {
            const { label: difficultyLabel, color: difficultyColor } =
              difficultyMap[difficulty || "LOW"];
            const {
              label: attendanceStatusLabel,
              color: attendanceStatusColor,
            } =
              attendanceStatusMap[
                curriculumStatus === "CANCELED" ? "ATTENDED" : attendanceStatus
              ];
            const {
              label: assignmentSubmissionStatusLabel,
              color: assignmentSubmissionStatusColor,
            } =
              assignmentStatus === "CANCELED"
                ? {
                    label: "과제 휴강",
                    color: "grey" as ComponentProps<typeof Tag>["color"],
                  }
                : assignmentMap[assignmentSubmissionStatus || "NOT_SUBMITTED"];

            return (
              <Link href={routePath["my-assignment"]} key={index}>
                <Flex className={boxContainerStyle}>
                  <div>
                    <div className={weekContainerStyle}>
                      <Text as="h5" color="black" typo="body1">
                        {week}주차
                      </Text>
                    </div>
                    <div>
                      {curriculumStatus === "CANCELED" ? (
                        <Text as="h3" color="sub" typo="h3">
                          휴강 주차
                        </Text>
                      ) : description ? (
                        <Flex
                          direction="column"
                          gap={4.5}
                          justifyContent="center"
                        >
                          <Flex alignItems="center" gap="xs">
                            <Text as="h3" typo="h3">
                              {title}
                            </Text>
                            <Tag color={difficultyColor} variant="outline">
                              {difficultyLabel}
                            </Tag>
                          </Flex>
                        </Flex>
                      ) : (
                        <Text as="h3" color="sub" typo="h3">
                          작성된 내용이 없어요
                        </Text>
                      )}
                    </div>
                  </div>
                  <div>
                    <Flex direction="column" gap="4px">
                      <Tag
                        aria-label="present"
                        color={attendanceStatusColor || "grey"}
                        style={tagStyle}
                        variant="solid2"
                      >
                        {attendanceStatusLabel}
                      </Tag>
                      <Tag
                        aria-label="present"
                        color={assignmentSubmissionStatusColor || "grey"}
                        style={tagStyle}
                        variant="solid2"
                      >
                        {assignmentSubmissionStatusLabel}
                      </Tag>
                    </Flex>
                  </div>
                </Flex>
              </Link>
            );
          }
        )}
      </Flex>
    </section>
  );
};

export default MobileStudyCurriculumPage;

const difficultyMap: Record<
  StudyDifficultyType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  BASIC: { label: "기초", color: "blue" },
  LOW: { label: "초급", color: "yellow" },
  MEDIUM: { label: "중급", color: "green" },
  HIGH: { label: "고급", color: "red" },
};

const assignmentMap: Record<
  AssignmentSubmissionStatusType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  SUCCESS: { label: "과제 제출", color: "blue" },
  FAILURE: { label: "과제 미제출", color: "red" },
  NOT_SUBMITTED: { label: "과제 진행전", color: "grey" },
};
const boxContainerStyle = css({
  backgroundColor: "backgroundNormal",
  border: "1px solid",
  borderColor: "outline",
  padding: "24px",
  borderRadius: "10px",
  justifyContent: "space-between",
});

const weekContainerStyle = css({
  minWidth: "84px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const tagStyle = {
  margin: "auto",
};
