import { css } from "@styled-system/css";
import { Tooltip } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { studyDetailApi } from "apis/studyDetailApi";
import Link from "next/link";

export const AssignmentDescription = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }
  const studyDashboard = await studyDetailApi.getStudyDetailDashboard(
    myOngoingStudyInfoData.studyId
  );

  return (
    <p>
      제출 완료하기 버튼을 누르면 등록한{" "}
      {!studyDashboard?.repositoryLink ? (
        <span className={nonCursorStyle}>GitHub 레포지토리</span>
      ) : (
        <Tooltip
          content={
            <Link href={studyDashboard?.repositoryLink} target="_blank">
              {studyDashboard?.repositoryLink}
            </Link>
          }
        >
          <span className={githubTextStyle}>GitHub 레포지토리</span>
        </Tooltip>
      )}
      의 main 브랜치에서 가장 최신 상태의 wil.md 파일이 제출돼요. <br />
      과제는 기한 내에 여러 번 제출할 수 있으나, 가장 마지막 제출만 최종 제출로
      인정해요.
    </p>
  );
};

const nonCursorStyle = css({
  color: "blueHover",
  cursor: "auto",
  textDecoration: "none",
});
const githubTextStyle = css({
  color: "blueHover",
  cursor: "pointer",
  textDecoration: "underline",
});
