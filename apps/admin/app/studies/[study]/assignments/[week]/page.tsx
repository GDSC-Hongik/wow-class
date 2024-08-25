import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyDetailApi } from "apis/study/studyDetailApi";
import Link from "next/link";
import Button from "wowds-ui/Button";

const Assignments = async ({
  params,
}: {
  params: { study: string; id: string };
}) => {
  const assignment = await studyDetailApi.getAssignment(+params.study);
  if (!assignment) return null;

  const {
    studyDetailId,
    title,
    deadline,
    week,
    descriptionLink,
    assignmentStatus,
  } = assignment;

  return (
    <>
      <styled.header className={headerStyle}>
        <Text as="h1" typo="h1">
          {week}주차 과제
        </Text>
        <Flex gap="0.75rem">
          <Button size="sm" variant="outline">
            과제 휴강처리
          </Button>
          <Link href={`${week}/edit`}>
            <Button size="sm" variant="outline">
              수정
            </Button>
          </Link>
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
          <Text color="sub" typo="body1">
            {descriptionLink}
          </Text>
        </Flex>
        <Flex direction="column" gap="xxs">
          <Text typo="h2">과제 기한</Text>
          <Text color="sub" typo="body1">
            {deadline}
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

export default Assignments;
