import { Flex, styled } from "@styled-system/jsx";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

export const Table = () => {
  return (
    <Flex height="5rem" justifyContent="flex-start" marginBottom="0.75rem">
      <styled.div paddingRight="3.12rem" paddingY="1.69rem">
        <styled.p color="textBlack" textStyle="h3">
          1주차
        </styled.p>
      </styled.div>
      <Flex
        direction="column"
        gap="xs"
        justifyContent="center"
        width="26.875rem"
      >
        <styled.p color="textBlack" textStyle="h3">
          (과제 제목) HTTP 통신 코드 작성하기
        </styled.p>
        <styled.p color="sub" textStyle="body3">
          종료 : 2024년 5월 23일 23:59
        </styled.p>
      </Flex>
      <styled.div paddingX="2.25rem" paddingY="1.25rem">
        <TextButton text="과제 명세 확인" />
      </styled.div>
      <styled.div paddingX="1.6875rem" paddingY="2rem">
        <Tag color="grey" variant="solid2">
          과제 휴강
        </Tag>
      </styled.div>
      <styled.div paddingX="1.51rem" paddingY="1.3rem">
        <Button size="sm" variant="outline">
          제출한 과제 확인
        </Button>
      </styled.div>
    </Flex>
  );
};
