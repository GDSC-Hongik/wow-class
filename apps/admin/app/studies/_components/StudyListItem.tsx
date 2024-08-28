import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import type { StudyKoreanType } from "types/entities/study";
import isAdmin from "utils/isAdmin";
import { Link as WowLinkIcon } from "wowds-icons";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

const StudyListItem = async ({ study }: { study: StudyListApiResponseDto }) => {
  const adminStatus = await isAdmin();
  const {
    studyId,
    title,
    studyType,
    notionLink,
    mentorName,
    academicYear,
    semesterType,
  } = study;

  return (
    <Table>
      <Table.Left style={TableLeftStyle}>
        <Text typo="body1">
          {academicYear}-{semesterType === "FIRST" ? "1" : "2"}
        </Text>
        <Flex alignItems="center" gap="xs">
          <Text typo="h3">{title}</Text>
          <Tag color={studyTypeColorMap[studyType]} variant="solid1">
            {studyType}
          </Tag>
        </Flex>
      </Table.Left>
      <Table.Right style={TableRightStyle}>
        <Text typo="body1">{mentorName} 멘토</Text>
        <Link href={notionLink || ""} style={LinkStyle}>
          <WowLinkIcon height={24} stroke="sub" width={24} />
          <TextButton text="스터디 소개 페이지" />
        </Link>
        <Flex alignItems="center" gap="sm">
          {adminStatus && (
            <Button size="sm" variant="outline">
              스터디 삭제
            </Button>
          )}
          <Link href={`${routerPath.studyDetailInfo.href}${studyId}`}>
            <Button size="sm" variant="solid">
              상세 정보 입력
            </Button>
          </Link>
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
  "온라인 커리큘럼": "blue",
  "오프라인 커리큘럼": "yellow",
};

const LinkStyle = {
  display: "flex",
  alignItems: "center",
  color: "sub",
  gap: "4px",
};

const TableLeftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "31px",
};

const TableRightStyle = {
  display: "flex",
  alignItems: "center",
  gap: "64px",
};
