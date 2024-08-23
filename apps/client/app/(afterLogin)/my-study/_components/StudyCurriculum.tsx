import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { formatWeekPeriod } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import LinkButton from "components/LinkButton";
import { attendanceStatusMap } from "constants/attendanceStatusMap";
import type { ComponentProps } from "react";
import type { StudyDifficultyType } from "types/entities/myStudy";
import { getIsCurrentWeek } from "utils/getIsCurrentWeek";
import Tag from "wowds-ui/Tag";

const StudyCurriculum = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }

  const studyCurriculumData = await myStudyApi.getStudyCurriculumList(
    myOngoingStudyInfoData?.studyId
  );

  return (
    <section aria-label="study-curriculum">
      <Text className={studyCurriculumTextStyle} typo="h2">
        스터디 커리큘럼
      </Text>
      <Flex direction="column">
        {studyCurriculumData?.map(
          (
            {
              week,
              title,
              description,
              difficulty,
              period: { startDate, endDate },
              attendanceStatus,
              assignmentSubmissionStatus,
            },
            index
          ) => {
            const { label: difficultyLabel, color: difficultyColor } =
              difficultyMap[difficulty || "LOW"];
            const {
              label: attendanceStatusLabel,
              color: attendanceStatusColor,
            } = attendanceStatusMap[attendanceStatus];
            const assignmentButtonText =
              assignmentSubmissionStatus === "SUCCESS"
                ? "제출한 과제 확인"
                : "과제 제출하기";
            const isCurrentWeek = getIsCurrentWeek(startDate, endDate);

            return (
              <Table key={index}>
                <Table.Left className={leftColStyle}>
                  <div className={weekContainerStyle}>
                    {isCurrentWeek && (
                      <div className={currentWeekIndicatorStyle} />
                    )}
                    <Text as="h5" typo="body1">
                      {week}주차
                    </Text>
                  </div>
                  <Flex direction="column" gap={4.5} justifyContent="center">
                    <Flex alignItems="center" gap="xs">
                      <Text as="h3" typo="h3">
                        {title}
                      </Text>
                      <Tag color={difficultyColor} variant="outline">
                        {difficultyLabel}
                      </Tag>
                    </Flex>
                    <Text
                      as="h3"
                      className={studyWeekDescriptionStyle}
                      color="sub"
                      typo="h3"
                    >
                      {description}
                    </Text>
                  </Flex>
                </Table.Left>
                <Table.Right className={rightColStyle}>
                  <Text as="h5" typo="body1">
                    {formatWeekPeriod(startDate, endDate)}
                  </Text>
                  <Tag
                    aria-label="present"
                    color={attendanceStatusColor || "grey"}
                    variant="solid2"
                  >
                    {attendanceStatusLabel}
                  </Tag>
                  <LinkButton
                    aria-label="check-submitted-assignment"
                    disabled={assignmentSubmissionStatus === "FAILURE"}
                    href=""
                    size="sm"
                    style={assignmentButtonStyle}
                    variant={
                      assignmentSubmissionStatus === "SUCCESS"
                        ? "outline"
                        : "solid"
                    }
                  >
                    {assignmentButtonText}
                  </LinkButton>
                </Table.Right>
              </Table>
            );
          }
        )}
      </Flex>
    </section>
  );
};

export default StudyCurriculum;

const difficultyMap: Record<
  StudyDifficultyType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  BASIC: { label: "기초", color: "blue" },
  LOW: { label: "초급", color: "yellow" },
  MEDIUM: { label: "중급", color: "green" },
  HIGH: { label: "고급", color: "red" },
};

const studyCurriculumTextStyle = css({
  marginBottom: "xl",
});

const leftColStyle = css({
  width: "514px",
});

const studyWeekDescriptionStyle = css({
  width: "430px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const rightColStyle = css({
  flexGrow: 1,
  justifyContent: "space-between !important",
  padding: "0 25px 0 32px",
});

const assignmentButtonStyle = {
  minWidth: "131px",
};

const weekContainerStyle = css({
  width: "84px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const currentWeekIndicatorStyle = css({
  width: "4px",
  height: "18px",
  backgroundColor: "primary",
});
