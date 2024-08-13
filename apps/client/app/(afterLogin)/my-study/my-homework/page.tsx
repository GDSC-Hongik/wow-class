import { Flex, styled } from "@styled-system/jsx";
import {
  DefaultHomeworkBox,
  HomeworkHistory,
  TextFieldHomeworkBox,
} from "components/my-homework";

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
      <Flex gap="lg">
        <TextFieldHomeworkBox />
        <DefaultHomeworkBox />
      </Flex>
      <div style={{ height: "4rem" }} />
      <HomeworkHistory />
    </>
  );
};

export default MyHomework;
