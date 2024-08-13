import { Flex, styled } from "@styled-system/jsx";
import Button from "wowds-ui/Button";

export const Table = () => {
  return (
    <Flex height="5rem" justifyContent="flex-start">
      <Flex direction="column" gap="xs" justifyContent="center">
        <Flex gap="xs">
          <styled.p color="textBlack" textStyle="h3">
            기초 웹 스터디
          </styled.p>
          <styled.p color="sub" textStyle="body3">
            태그 컴포넌트
          </styled.p>
        </Flex>
        <styled.p color="sub" textStyle="body3">
          (스터디 한 줄 소개-스터디 상세 설명 노션 링크로 연결)
        </styled.p>
      </Flex>
      <styled.p
        alignItems="center"
        color="textBlack"
        display="flex"
        paddingX="1.75rem"
        textStyle="body1"
      >
        강가은 멘토
      </styled.p>
      <styled.p
        alignItems="center"
        color="textBlack"
        display="flex"
        paddingX="1.75rem"
        textStyle="body1"
      >
        화 18:00-19:00
      </styled.p>
      <styled.p
        alignItems="center"
        color="textBlack"
        display="flex"
        paddingX="1.75rem"
        textStyle="body1"
      >
        4주 코스
      </styled.p>
      <styled.p
        alignItems="center"
        color="textBlack"
        display="flex"
        paddingX="1.75rem"
        textStyle="body1"
      >
        06.18 개강
      </styled.p>
      <styled.div paddingX="1.51rem" paddingY="1.3rem">
        <Button size="sm" variant="solid">
          수강 신청
        </Button>
      </styled.div>
    </Flex>
  );
};
