import { Flex, styled } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import Image from "next/image";

import {
  HomeworkHistory,
  RepositorySubmissionBox,
} from "@/(afterLogin)/my-study/my-homework/_components";

import { AssignmentOverviewBox } from "./_components/AssignmentOverviewBox/AssignmentBox";
import { assignmentData, studyDashBoardData } from "./_components/mockData";

const MyHomeworkPage = async () => {
  // const studyDashboard = await studyDetailApi.getStudyDetailDashboard(1);

  //TODO: studyDashboard.isLinkEditable 가 false 면 이번 주 과제 조회 api 사용
  const studyDashboard = studyDashBoardData;

  return (
    <>
      <Flex gap="sm" textStyle="h1">
        <styled.h1 color="textBlack">나의 과제</styled.h1>
        <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
        <styled.h1 color="primary">기초 웹 스터디</styled.h1>
      </Flex>
      <Space height={8} />
      <div>
        제출 완료하기 버튼을 누르면 등록한
        <styled.span color="blueHover"> GitHub 레포지토리</styled.span>의 main
        브랜치에서 가장 최신 상태의 WIL.md 파일이 제출돼요. <br />
        과제는 기한 내에 여러 번 제출할 수 있으나, 가장 마지막 제출만 최종
        제출로 인정해요.
      </div>
      <Space height={48} />
      <Flex gap="lg">
        {studyDashBoardData.isLinkEditable && (
          <>
            <RepositorySubmissionBox
              repositoryLink={studyDashBoardData.repositoryLink}
            />
            <AssignmentOverviewBox
              assignments={studyDashboard.submittableAssignments}
              buttonsDisabled={!studyDashBoardData.repositoryLink}
            />
          </>
        )}
        {!studyDashBoardData.isLinkEditable && (
          <AssignmentOverviewBox assignments={assignmentData} />
        )}
      </Flex>
      <Space height={64} />
      <HomeworkHistory />
    </>
  );
};

export default MyHomeworkPage;
