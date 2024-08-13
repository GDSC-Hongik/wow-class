import { styled } from "@styled-system/jsx";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

const MyHomework = () => {
  return (
    <>
      <styled.p color="textBlack" textStyle="h1">
        나의 스터디
      </styled.p>
      <div style={{ height: "0.5rem" }} />
      <styled.div>
        제출 완료하기 버튼을 누르면 등록한 GitHub 레포지토리의 main 브랜치에서
        가장 최신 상태의 WIL.md 파일이 제출돼요. <br />
        과제는 기한 내에 여러 번 제출할 수 있으나, 가장 마지막 제출만 최종
        제출로 인정해요.
      </styled.div>
      <div style={{ height: "3rem" }} />
      <Box
        style={{ paddingTop: "1.5rem" }}
        text={
          <>
            <styled.p color="primary" textStyle="label2">
              4주차
            </styled.p>
            <div style={{ height: "1rem" }} />
            <styled.p color="textBlack" textStyle="h2">
              HTTP 통신 코드 작성하기
            </styled.p>
            <TextButton style={{ paddingLeft: "0px" }} text="과제 명세 확인" />
            <div style={{ height: "0.5rem" }} />
            <styled.p color="sub" textStyle="body1">
              종료 일시 : 2024년 5월 23일 23:59
            </styled.p>
            <div style={{ height: "1.63rem" }} />
            <Button style={{ maxWidth: "100%" }} variant="outline">
              제출하러 가기
            </Button>
            <div style={{ height: "0.5rem" }} />
            <Button style={{ maxWidth: "100%" }}>제출 완료</Button>
          </>
        }
      />
    </>
  );
};

export default MyHomework;
