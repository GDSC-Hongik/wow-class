"use client";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import type { StudyKoreanType, StudyType } from "types/entities/study";
import { Link as WowLinkIcon } from "wowds-icons";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

const StudyListItem = ({
  study,
  adminStatus,
}: {
  study: StudyListApiResponseDto;
  adminStatus: boolean;
}) => {
  const { studyId, title, type, descriptionNotionLink, mentorName, semester } =
    study.study;

  const studyType: Record<StudyType, StudyKoreanType> = {
    ASSIGNMENT: "과제 스터디",
    OFFLINE: "오프라인 스터디",
    ONLINE: "온라인 스터디",
  };

  return (
    <Table>
      <Table.Left style={TableLeftStyle}>
        <Text typo="body1">
          {semester.academicYear}-
          {semester.semesterType === "FIRST" ? "1" : "2"}
        </Text>
        <Flex alignItems="center" gap="xs">
          <Text style={StudyNameStyle} typo="h3">
            {title}
          </Text>
          <Tag color={studyTypeColorMap[studyType[type]]} variant="solid1">
            {studyType[type]}
          </Tag>
        </Flex>
      </Table.Left>
      <Table.Right style={TableRightStyle}>
        <Text typo="body1">{mentorName} 멘토</Text>
        <Link
          href={descriptionNotionLink || ""}
          style={LinkStyle}
          target="_blank"
        >
          <WowLinkIcon height={24} stroke="sub" width={24} />
          <TextButton style={{ padding: 0 }} text="스터디 소개 페이지" />
        </Link>
        <Flex alignItems="center" gap="sm">
          {adminStatus && (
            <Button size="sm" variant="outline">
              스터디 삭제
            </Button>
          )}

          <Button
            asProp={Link}
            href={`${routerPath.studyDetailInfo.href}${studyId}`}
            size="sm"
            variant="solid"
          >
            상세 정보 입력
          </Button>
        </Flex>
      </Table.Right>
    </Table>
  );
};

export default StudyListItem;

const studyTypeColorMap: Record<
  StudyKoreanType,
  ComponentProps<typeof Tag>["color"]
> = {
  "과제 스터디": "green",
  "온라인 스터디": "blue",
  "오프라인 스터디": "yellow",
};

const LinkStyle = {
  display: "flex",
  alignItems: "center",
  color: "sub",
  gap: "8px",
};

const TableLeftStyle = {
  display: "flex",
  flex: 2,
  alignItems: "center",
  gap: "31px",
};

const TableRightStyle = {
  display: "flex",
  flex: 3,
  alignItems: "center",
  gap: "64px",
};

const StudyNameStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "150px",
};
