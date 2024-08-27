import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyApi } from "apis/study/studyApi";
import Link from "next/link";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

const Assignments = async ({
  params: { studyDetailId },
}: {
  params: { studyDetailId: string };
}) => {
  const assignment = await studyApi.getAssignment(+studyDetailId);
  if (!assignment) return null;

  // TODO: studyName 추가
  const { week, title, descriptionLink, deadline } = assignment;

  const { year, month, day, hours, minutes } = parseISODate(deadline);

  return (
    <>
      <styled.header className={headerStyle}>
        <Text as="h1" typo="h1">
          {title} • {week}주차 과제
        </Text>
        <Flex gap="0.75rem">
          <Button size="sm" variant="outline">
            과제 휴강처리
          </Button>
          <Button
            asProp={Link}
            href={`${studyDetailId}/edit`}
            size="sm"
            variant="outline"
          >
            수정
          </Button>
        </Flex>
      </styled.header>
      <Flex direction="column" gap="4rem">
        <Flex direction="column" gap="xxs">
          <Text typo="h2">과제 제목</Text>
          <Text color="sub" typo="body1">
            {title}
          </Text>
        </Flex>
        <Flex direction="column" gap="xxs">
          <Text typo="h2">과제 명세 링크</Text>
          <TextButton
            asProp={Link}
            className={textButtonStyle}
            href={descriptionLink}
            target="_blank"
            text={descriptionLink}
          />
        </Flex>
        <Flex direction="column" gap="xxs">
          <Text typo="h2">과제 기한</Text>
          <Text color="sub" typo="body1">
            {year}년 {month}월 {day}일 {hours}:{padWithZero(minutes)}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

const headerStyle = css({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const textButtonStyle = css({
  color: "sub",
});

export default Assignments;
