import { Flex, styled } from "@styled-system/jsx";
import Image from "next/image";

export const AssignmentHeader = () => {
  //TODO: 스터디 정보 연결, 내가 수강 중인 스터디 api 호출
  //const studyId = await myStudyApi.getMyOngoingStudyInfo()
  //const { title } = await myStudyApi.getBasicStudyInfo(studyId)

  return (
    <header>
      <Flex gap="sm" textStyle="h1">
        <styled.h1 color="textBlack">나의 과제</styled.h1>
        <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
        <styled.h1 color="primary">기초 웹 스터디</styled.h1>
      </Flex>
    </header>
  );
};
