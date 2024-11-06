"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { CompletedStudyDto } from "types/dtos/studyHistory";
import type { StudyType } from "types/entities/common/study";
import Table from "wowds-ui/Table";
import Tag from "wowds-ui/Tag";
import Tbody from "wowds-ui/Tbody";
import Td from "wowds-ui/Td";
import TableRow from "wowds-ui/Tr";

const mockData: CompletedStudyDto[] = [
  {
    studyId: 48,
    academicYear: 2024,
    semesterType: "SECOND",
    title: "세은 ㅅㅌㄷ",
    studyType: "온라인 스터디",
    notionLink: "ㅇㄴㄹㄴㅇㄹ",
    introduction: "ㄴㅇㄹㄴㅇㄹ",
    mentorName: "유세은",
    totalWeek: 3,
    studyHistoryStatus: "NONE",
    achievements: [],
  },
  {
    studyId: 49,
    academicYear: 2024,
    semesterType: "SECOND",
    title: "1102 현영 스터디",
    studyType: "오프라인 스터디",
    mentorName: "이현영",
    totalWeek: 12,
    studyHistoryStatus: "NONE",
    achievements: [],
  },
];

export const CompletedStudy = async () => {
  //const data = await studyHistoryApi.getMyCompletedStudy();
  const data = mockData;
  console.log(data);
  if (!data) return null;

  return (
    <Table>
      <Tbody>
        {data.map((study) => (
          <div key={study.studyId}>
            <TableRow value={study.studyId}>
              <Td>
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
              </Td>
              <Td>
                <Text>{study.mentorName} 멘토</Text>
              </Td>
              <Td>
                <Text>
                  {study.academicYear}년-
                  {study.semesterType === "FIRST" ? "1" : "2"}
                </Text>
              </Td>
              <Td>
                <Text>{study.totalWeek}주 코스</Text>
              </Td>
            </TableRow>
          </div>
        ))}
      </Tbody>
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
