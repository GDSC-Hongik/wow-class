import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { createStudyApi } from "apis/study/createStudyApi";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyType } from "types/entities/study";
import isAdmin from "utils/isAdmin";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

const StudyList = async () => {
  const adminStatus = await isAdmin();

  const studyList = await createStudyApi.getStudyList();

  if (studyList?.length === 0) {
    return (
      <Flex
        alignItems="center"
        direction="column"
        gap="xl"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Image
          alt="study-empty"
          height={186}
          src="/images/empty.svg"
          width={140}
        />
        <Text color="sub" typo="h2">
          개설된 스터디가 없어요
        </Text>
      </Flex>
    );
  }
  return (
    <section aria-label="study-list" className={SectionStyle}>
      {studyList?.map(
        ({ studyId, title, studyType, notionLink, mentorName }, index) => {
          return (
            <Table key={`${index}-${studyId}`}>
              <Table.Left>
                <Flex alignItems="center" gap="31px">
                  <Text typo="body1">2024-1</Text>
                  <Flex alignItems="center" gap="xs">
                    <Text typo="h3">{title}</Text>
                    <Tag color={studyTypeColorMap[studyType]} variant="solid1">
                      {studyType}
                    </Tag>
                  </Flex>
                </Flex>
              </Table.Left>

              <Table.Right>
                <Flex alignItems="center" gap="64px">
                  <Text typo="body1">{mentorName} 멘토</Text>
                  <Link
                    href={notionLink}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "sub",
                      gap: "8px",
                    }}
                  >
                    <Image
                      alt="study-link"
                      height={24}
                      src="/images/link.svg"
                      width={24}
                    />
                    <Text
                      color="sub"
                      style={{ textDecoration: "underline" }}
                      typo="label1"
                    >
                      스터디 소개 페이지
                    </Text>
                  </Link>
                  <Flex alignItems="center" gap="sm">
                    {adminStatus && (
                      <Button size="sm" variant="outline">
                        스터디 삭제
                      </Button>
                    )}
                    <Link href={`/studies/detail-info/${studyId}`}>
                      <Button size="sm" variant="solid">
                        상세 정보 입력
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Table.Right>
            </Table>
          );
        }
      )}
    </section>
  );
};

const studyTypeColorMap: Record<
  StudyType,
  ComponentProps<typeof Tag>["color"]
> = {
  "과제 스터디": "green",
  "온라인 세션": "blue",
  "오프라인 세션": "yellow",
};

export default StudyList;

const SectionStyle = css({
  width: "100%",
  height: "100%",
  overflow: "scroll",
  scrollbarWidth: "none",
});
