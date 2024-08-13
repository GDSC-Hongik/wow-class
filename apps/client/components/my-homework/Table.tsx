import { Flex, styled } from "@styled-system/jsx";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

export const Table = () => {
  return (
    <Flex height="80px" justifyContent="flex-start" marginBottom="12px">
      <styled.div paddingRight="50px" paddingY="27px">
        <styled.h3 color="textBlack" textStyle="h3">
          1주차
        </styled.h3>
      </styled.div>
      <Flex direction="column" gap="xs" justifyContent="center" width="430px">
        <styled.p color="textBlack" textStyle="h3">
          (과제 제목) HTTP 통신 코드 작성하기
        </styled.p>
        <styled.p color="sub" textStyle="body3">
          종료 : 2024년 5월 23일 23:59
        </styled.p>
      </Flex>
      <styled.div paddingX="36px" paddingY="20px">
        <TextButton text="과제 명세 확인" />
      </styled.div>
      <styled.div paddingX="27px" paddingY="32px">
        <Tag color="grey" variant="solid2">
          과제 휴강
        </Tag>
      </styled.div>
      <styled.div paddingX="24px" paddingY="20px">
        <Button size="sm" variant="outline">
          제출한 과제 확인
        </Button>
      </styled.div>
    </Flex>
  );
};
