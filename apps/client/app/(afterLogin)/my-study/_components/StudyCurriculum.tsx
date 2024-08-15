import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

const StudyCurriculum = () => {
  return (
    <section aria-labelledby="study-curriculum">
      <Text className={studyCurriculumTextStyle} typo="h2">
        스터디 커리큘럼
      </Text>
      <Flex>
        <Table>
          <Table.Left className={leftColStyle}>
            <Text as="h5" typo="body1">
              1주차
            </Text>
            <Flex direction="column" gap={4.5} justifyContent="center">
              <Flex alignItems="center" gap="xs">
                <Text as="h3" typo="h3">
                  (제목) 웹 개발의 역사
                </Text>
                <Tag color="blue" variant="outline">
                  기초
                </Tag>
              </Flex>
              <Text
                as="h3"
                className={studyWeekDescriptionStyle}
                color="sub"
                typo="h3"
              >
                (설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가
                무엇인지 알아보는
              </Text>
            </Flex>
          </Table.Left>
          <Table.Right className={rightColStyle}>
            <Text as="h5" typo="body1">
              05.01 - 05.08
            </Text>
            <Tag aria-label="present" color="blue" variant="solid2">
              출석 완료
            </Tag>
            <Button
              aria-label="check-submitted-homework"
              size="sm"
              variant="outline"
            >
              제출한 과제 확인
            </Button>
          </Table.Right>
        </Table>
      </Flex>
    </section>
  );
};

export default StudyCurriculum;

const studyCurriculumTextStyle = css({
  marginBottom: "xl",
});

const leftColStyle = css({
  gap: "50px",
  width: "514px",
});

const studyWeekDescriptionStyle = css({
  width: "430px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const rightColStyle = css({
  flexGrow: 1,
  justifyContent: "space-evenly !important",
});
