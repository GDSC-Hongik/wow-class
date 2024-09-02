import { Flex, styled } from "@styled-system/jsx";
import { myStudyApi } from "apis/myStudyApi";
import Image from "next/image";

export const AssignmentHeader = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }
  const myBasicInfoData = await myStudyApi.getBasicStudyInfo(
    myOngoingStudyInfoData.studyId
  );

  console.log(myBasicInfoData, "myBasicInfoData");
  return (
    <header>
      <Flex gap="sm" textStyle="h1">
        <styled.h1 color="textBlack">나의 과제</styled.h1>
        <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
        <styled.h1 color="primary">{myBasicInfoData?.title}</styled.h1>
      </Flex>
    </header>
  );
};
