"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { AwardIcon, StarCheckIcon, Text } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { studyKoreanMap } from "constants/studyKoreanMap";
import Link from "next/link";
import type { ComponentProps, CSSProperties } from "react";
import type { AchievmentType, StudyType } from "types/entities/common/study";
import Table from "wowds-ui/Table";
import Tag from "wowds-ui/Tag";

export const CompletedStudy = async () => {
  const data = await studyHistoryApi.getMyAppliedStudyList();
  if (!data) return;

  return (
    <Table fullWidth>
      <Table.Thead>
        <Table.Th>스터디 이름 </Table.Th>
        <Table.Th>멘토 </Table.Th>
        <Table.Th>학기</Table.Th>
        <Table.Th>코스 기간 </Table.Th>
        <Table.Th>수료 </Table.Th>
        <Table.Th>우수 </Table.Th>
      </Table.Thead>
      <Table.Tbody>
        {data.map(({ study, achievements, studyHistory }) => (
          <Table.Tr key={study.studyId} value={study.studyId}>
            <Table.Td style={tdStyle}>
              <Flex>
                <Text typo="h3">{study.title}</Text>
                <Tag
                  color={curriculumColors[study.type] ?? "green"}
                  variant="solid1"
                >
                  {studyKoreanMap[study.type]}
                </Tag>
              </Flex>
              {study.description && (
                <Link
                  className={introductionLinkTextStyle}
                  href={study.descriptionNotionLink ?? ""}
                  rel="noopener"
                  target="_blank"
                >
                  <Text color="sub" typo="body2">
                    {study.description}
                  </Text>
                </Link>
              )}
            </Table.Td>
            <Table.Td style={tdStyle}>
              <Text className={mentorTextstyle}>{study.mentorName} 멘토</Text>
            </Table.Td>
            <Table.Td style={tdStyle}>
              <Text>
                {study.semester.academicYear}-
                {study.semester.semesterType === "FIRST" ? "1" : "2"}
              </Text>
            </Table.Td>
            <Table.Td style={tdStyle}>
              <Text>{study.totalRound}주 코스</Text>
            </Table.Td>
            <Table.Td style={tdStyle}>
              {studyHistory.status === "COMPLETED" ? (
                <StarCheckIcon checked={true} />
              ) : (
                <Text className={emptyTextStyle}>-</Text>
              )}
            </Table.Td>
            <Table.Td style={tdStyle}>
              <Flex gap="10px">
                <AchievementIcons
                  achievements={achievements.map((item) => item.type)}
                />
              </Flex>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

const AchievementIcons = ({
  achievements,
}: {
  achievements: AchievmentType[];
}) => {
  const achievementTypes: AchievmentType[] = [
    "FIRST_ROUND_OUTSTANDING_STUDENT",
    "SECOND_ROUND_OUTSTANDING_STUDENT",
  ];

  const isAchievment = achievementTypes.some((type) =>
    achievements.includes(type)
  );

  return isAchievment ? (
    <>
      {achievementTypes.map(
        (type) =>
          achievements.includes(type) && (
            <AwardIcon disabled={false} key={type} />
          )
      )}
    </>
  ) : (
    <Text className={emptyTextStyle}>-</Text>
  );
};

const curriculumColors: Record<StudyType, ComponentProps<typeof Tag>["color"]> =
  {
    ASSIGNMENT: "green",
    ONLINE: "blue",
    OFFLINE: "yellow",
  };

const introductionLinkTextStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: "underline",
});

const mentorTextstyle = css({
  display: "flex",
  alignItems: "center",
});

const tdStyle: CSSProperties = {
  paddingBottom: "20px",
  paddingTop: "16px",
};

const emptyTextStyle = css({
  paddingLeft: "5px",
});
