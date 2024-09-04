import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyApi } from "apis/study/studyApi";
import ItemSeparator from "components/ItemSeparator";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

const AssignmentsPage = async ({
  params: { studyDetailId },
}: {
  params: { studyDetailId: string };
}) => {
  const assignment = await studyApi.getAssignment(+studyDetailId);
  if (!assignment) return null;
  const { week, title, studyTitle, descriptionLink, deadline } = assignment;

  if (!deadline) return null;
  const { year, month, day, hours, minutes } = parseISODate(deadline);

  return (
    <>
      <header className={headerStyle}>
        <Text
          as="h1"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          typo="h1"
        >
          {studyTitle} <ItemSeparator height={6} width={6} />
          <styled.span color="primary">
            {week}주차 <styled.span color="textBlack">과제</styled.span>
          </styled.span>
        </Text>
        <Button
          asProp={Link}
          href={routerPath["assignment-edit"].href(studyDetailId)}
          size="sm"
          variant="outline"
        >
          수정
        </Button>
      </header>
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
            href={descriptionLink || ""}
            target="_blank"
            text={descriptionLink || ""}
          />
        </Flex>
        <Flex direction="column" gap="xxs">
          <Text typo="h2">과제 기한</Text>
          <Text color="sub" typo="body1">
            {year}년 {month}월 {day}일 {padWithZero(hours)}:
            {padWithZero(minutes)}
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

export default AssignmentsPage;
