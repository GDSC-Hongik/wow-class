import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { color } from "wowds-tokens";

const StudyNotices = () => {
  return (
    <section aria-label="study-notices">
      <Text as="h2" className={studyNoticeHeadingStyle} typo="h2">
        스터디 공지
      </Text>
      <Flex
        className={studyNoticeBoxStyle}
        justifyContent="space-between"
        style={{ backgroundColor: `${color.monoBackgroundPressed}` }}
      >
        <Text as="h3" typo="h3">
          2주차 과제 검사 결과 안내
        </Text>
        <Text as="h3" typo="h3">
          2024.06.08
        </Text>
      </Flex>
      <Flex
        className={studyNoticeBoxStyle}
        justifyContent="space-between"
        style={{ backgroundColor: "white" }}
      >
        <Text as="h3" typo="h3">
          1주차 실습
        </Text>
        <Text as="h3" typo="h3">
          2024.06.01
        </Text>
      </Flex>
    </section>
  );
};

export default StudyNotices;

const studyNoticeHeadingStyle = css({
  marginBottom: "md",
});

const studyNoticeBoxStyle = css({
  alignItems: "center",
  borderRadius: "4px",
  height: "80px",
  padding: "0 47px 0 20px",
});
