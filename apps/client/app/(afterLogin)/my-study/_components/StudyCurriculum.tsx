import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { formatWeekPeriod } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import { attendanceStatusMap } from "constants/attendanceStatusMap";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyDifficultyType } from "types/entities/myStudy";
import { getIsCurrentWeek } from "utils/getIsCurrentWeek";
import Button from "wowds-ui/Button";
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
              curriculumStatus,
              submissionLink,
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
                  <div className={contentContainerStyle}>
                    {curriculumStatus === "CANCELLED" ? (
                      <Text as="h3" color="sub" typo="h3">
                        휴강 주차
                      </Text>
                    ) : (
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
                        <Text
                          as="h3"
                          className={studyWeekDescriptionStyle}
                          color="sub"
                          typo="h3"
                        >
                          {description}
                        </Text>
                      </Flex>
                    )}
                  </div>
                </Table.Left>
                <Table.Right className={rightColStyle}>
                  <Text as="h5" className={weekPeriodTextStyle} typo="body1">
                    {formatWeekPeriod(startDate, endDate)}
                  </Text>
                  <div className={tagContainerStyle}>
                    <Tag
                      aria-label="present"
                      color={attendanceStatusColor || "grey"}
                      style={tagStyle}
                      variant="solid2"
                    >
                      {attendanceStatusLabel}
                    </Tag>
                  </div>
                  <Button
                    aria-label="check-submitted-assignment"
                    asProp={Link}
                    disabled={assignmentSubmissionStatus === "FAILURE"}
                    href={submissionLink || ""}
                    size="sm"
                    style={assignmentButtonStyle}
                    target="_blank"
                    variant={
                      assignmentSubmissionStatus === "SUCCESS"
                        ? "outline"
                        : "solid"
                    }
                  >
                    {assignmentButtonText}
                  </Button>
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
  minWidth: "334px",
});

const studyWeekDescriptionStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const rightColStyle = css({
  justifyContent: "flex-end !important",
  "@media (max-width: 1200px)": {
    display: "block",
  },
});

const assignmentButtonStyle = {
  minWidth: "131px",
  margin: "21px 25px",
};

const weekContainerStyle = css({
  minWidth: "84px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const currentWeekIndicatorStyle = css({
  width: "4px",
  height: "18px",
  backgroundColor: "primary",
});

const contentContainerStyle = css({
  width: "calc(100% - 84px)",
});

const weekPeriodTextStyle = css({
  textAlign: "center",
  width: "163px",
  display: "none",
  "@media (min-width: 1200px)": {
    display: "block",
    width: "116.5px",
  },
});

const tagContainerStyle = css({
  display: "none",
  "@media (min-width: 1100px)": {
    display: "block",
  },
});

const tagStyle = {
  margin: "27px 32px",
  width: "69px",
};
