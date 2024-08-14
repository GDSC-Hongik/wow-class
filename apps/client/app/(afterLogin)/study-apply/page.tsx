import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Space, Table } from "@wow-class/ui";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

const StudyApplyPage = () => {
  const array = [0, 1, 2];
  return (
    <>
      <styled.h1 color="textBlack" textStyle="h1">
        신청 가능한 스터디
      </styled.h1>
      <Space height={19} />
      {array.map(() => (
        <Table
          center={
            <>
              <Table.Content
                subText="(스터디 한 줄 소개-스터디 상세 설명 노션 링크로 연결)"
                text="기초 웹 스터디"
                textRight={
                  <Tag color="yellow" variant="solid1">
                    신규
                  </Tag>
                }
              />
              <p className={textCellStyle}>강가은 멘토</p>
              <p className={textCellStyle}>화 18:00-19:00</p>
              <p className={textCellStyle}>4주 코스</p>
              <p className={textCellStyle}>06.18 개강</p>
              <styled.div paddingX="24px">
                <Button size="sm" variant="solid">
                  수강 신청
                </Button>
              </styled.div>
            </>
          }
        />
      ))}
    </>
  );
};

export default StudyApplyPage;

const textCellStyle = css({
  color: "textBlack",
  paddingX: "28px",
  textStyle: "body1",
});
