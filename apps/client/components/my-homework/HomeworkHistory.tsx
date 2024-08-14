import { styled } from "@styled-system/jsx";
import { Space, Table } from "@wow-class/ui";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

export const HomeworkHistory = () => {
  const array = [0, 1, 2];
  return (
    <>
      <styled.h2 textStyle="h2">과제 히스토리</styled.h2>
      <styled.div color="sub" textStyle="body1">
        지난 과제의 제출 내역을 확인해요.
      </styled.div>
      <div style={{ height: "24px" }} />
      {array.map(() => (
        <Table
          left={
            <>
              <styled.h3 color="textBlack" textStyle="h3">
                1주차
              </styled.h3>
              <Space width={50} />
              <Table.Content
                subText="종료 : 2024년 5월 23일 23:59"
                text="(과제 제목) HTTP 통신 코드 작성하기"
              />
            </>
          }
          right={
            <>
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
            </>
          }
        />
      ))}
    </>
  );
};
