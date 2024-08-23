import { css } from "@styled-system/css";
import { studyDetailApi } from "apis/studyDetailApi";
import Tooltip from "components/Tooltip";
import { studyDashBoardData } from "constants/assignmentMockData";
import Link from "next/link";

export const AssignmentDescription = async () => {
  //const studyDashboard = await studyDetailApi.getStudyDetailDashboard(1);

  const studyDashboard = studyDashBoardData;
  return (
    <p>
      제출 완료하기 버튼을 누르면 등록한{" "}
      {studyDashboard.isLinkEditable ? (
        <span className={githubTextStyle}>GitHub 레포지토리</span>
      ) : (
        <Tooltip
          content={
            <Link href="https://github.com/123456789012345678" target="_blank">
              https://github.com/123456789012345678
            </Link>
          }
        >
          <span className={githubTextStyle}>GitHub 레포지토리</span>
        </Tooltip>
      )}
      의 main 브랜치에서 가장 최신 상태의 WIL.md 파일이 제출돼요. <br />
      과제는 기한 내에 여러 번 제출할 수 있으나, 가장 마지막 제출만 최종 제출로
      인정해요.
    </p>
  );
};

const githubTextStyle = css({
  color: "blueHover",
  cursor: "pointer",
  textDecoration: "underline",
});
