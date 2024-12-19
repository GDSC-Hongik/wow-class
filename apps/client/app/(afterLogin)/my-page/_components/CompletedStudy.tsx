"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { AwardIcon, StarCheckIcon, Text } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { AchievmentType, StudyType } from "types/entities/common/study";
import Table from "wowds-ui/Table";
import Tag from "wowds-ui/Tag";

export const CompletedStudy = async () => {
  const data = await studyHistoryApi.getMyCompletedStudy();
  if (!data) return null;

  const getAchievementIcons = (achievements: string[]) => {
    const achievementTypes: AchievmentType[] = [
      "FIRST_ROUND_OUTSTANDING_STUDENT",
      "SECOND_ROUND_OUTSTANDING_STUDENT",
    ];

    return achievementTypes.some((type) => achievements.includes(type)) ? (
      achievementTypes.map(
        (type) => achievements.includes(type) && <AwardIcon disabled={false} />
      )
    ) : (
      <Text>-</Text>
    );
  };

  return (
    <Table className={tableStyle}>
      <Table.Thead>
        <Table.Th>스터디 이름 </Table.Th>
        <Table.Th>멘토 </Table.Th>
        <Table.Th>학기</Table.Th>
        <Table.Th>코스 기간 </Table.Th>
        <Table.Th>수료 </Table.Th>
        <Table.Th>우수 </Table.Th>
      </Table.Thead>
      <Table.Tbody>
        {data.map((study) => (
          <div key={study.studyId}>
            <Table.Tr value={study.studyId}>
              <Table.Td>
                <Flex>
                  <Text typo="h3">{study.title}</Text>
                  <Tag
                    color={curriculumColors[study.studyType] ?? "green"}
                    variant="solid1"
                  >
                    {study.studyType}
                  </Tag>
                </Flex>
                {study.introduction && (
                  <Link
                    className={introductionLinkTextStyle}
                    href={study.notionLink ?? ""}
                    target="_blank"
                  >
                    <Text color="sub" typo="body2">
                      {study.introduction}
                    </Text>
                  </Link>
                )}
              </Table.Td>
              <Table.Td>
                <Text className={mentorTextstyle}>{study.mentorName} 멘토</Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  {study.academicYear}-
                  {study.semesterType === "FIRST" ? "1" : "2"}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>{study.totalWeek}주 코스</Text>
              </Table.Td>
              <Table.Td>
                {study.studyHistoryStatus === "COMPLETED" ? (
                  <StarCheckIcon checked={true} />
                ) : (
                  <Text>-</Text>
                )}
              </Table.Td>
              <Table.Td>{getAchievementIcons(study.achievements)}</Table.Td>
            </Table.Tr>
          </div>
        ))}
      </Table.Tbody>
    </Table>
  );
};

const curriculumColors: Record<StudyType, ComponentProps<typeof Tag>["color"]> =
  {
    "과제 스터디": "green",
    "온라인 스터디": "blue",
    "오프라인 스터디": "yellow",
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

const tableStyle = css({
  "& table": {
    width: "100%!",
  },
});
