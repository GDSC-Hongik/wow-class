import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

export const Table = () => {
  return (
    <Flex height="80px" justifyContent="flex-start">
      <Flex direction="column" gap="xs" justifyContent="center">
        <Flex gap="xs">
          <styled.p color="textBlack" textStyle="h3">
            기초 웹 스터디
          </styled.p>
          <Tag color="yellow" variant="solid1">
            신규
          </Tag>
        </Flex>
        <styled.p color="sub" textStyle="body3">
          (스터디 한 줄 소개-스터디 상세 설명 노션 링크로 연결)
        </styled.p>
      </Flex>
      <styled.p className={textCellStyle}>강가은 멘토</styled.p>
      <styled.p className={textCellStyle}>화 18:00-19:00</styled.p>
      <styled.p className={textCellStyle}>4주 코스</styled.p>
      <styled.p className={textCellStyle}>06.18 개강</styled.p>
      <styled.div paddingX="24px" paddingY="20px">
        <Button size="sm" variant="solid">
          수강 신청
        </Button>
      </styled.div>
    </Flex>
  );
};

const textCellStyle = css({
  display: "flex",
  alignItems: "center",
  color: "textBlack",
  paddingX: "28px",
  textStyle: "body1",
});
