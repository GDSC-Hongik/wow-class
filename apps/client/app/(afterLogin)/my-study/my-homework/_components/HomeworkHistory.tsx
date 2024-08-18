import { Flex, styled } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

export const HomeworkHistory = () => {
  const array = [0, 1, 2];
  return (
    <>
      <Text as="h2" typo="h2">
        과제 히스토리
      </Text>
      <Text color="sub" typo="body1">
        지난 과제의 제출 내역을 확인해요.
      </Text>
      <Space height={24} />
      {array.map(() => (
        <Table>
          <Table.Left>
            <Text as="h3" typo="h3">
              1주차
            </Text>
            <Space width={50} />
            <Flex direction="column" gap="xxs" justifyContent="center">
              <Text typo="h3">(과제 제목) HTTP 통신 코드 작성하기</Text>
              <Text color="sub" typo="body2">
                종료 : 2024년 5월 23일 23:59
              </Text>
            </Flex>
          </Table.Left>
          <Table.Right>
            <styled.div paddingX="36px">
              <TextButton text="과제 명세 확인" />
            </styled.div>
            <styled.div paddingX="32px">
              <Tag color="grey" variant="solid2">
                과제 휴강
              </Tag>
            </styled.div>
            <styled.div paddingX="25px">
              <Button size="sm" variant="outline">
                제출한 과제 확인
              </Button>
            </styled.div>
          </Table.Right>
        </Table>
      ))}
    </>
  );
};
