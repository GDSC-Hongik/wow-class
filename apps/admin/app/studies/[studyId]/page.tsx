import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import { Edit } from "wowds-icons";
import Divider from "wowds-ui/Divider";

import StudyAnnouncement from "./_components/announcement/StudyAnnouncement";
import AssignmentList from "./_components/assignment/AssignmentList";
import CheckAttendanceNumber from "./_components/attendance/CheckAttendanceNumber";
import CurriculumList from "./_components/curriculum/CurriculumList";
import Header from "./_components/header/Header";

export const generateMetadata = async ({
  params: { studyId },
}: {
  params: { studyId: string };
}) => {
  const study = await studyApi.getStudyBasicInfo(+studyId);
  return {
    title: study ? study.title : "스터디",
  };
};

const StudyPage = ({ params }: { params: { studyId: string } }) => {
  const { studyId } = params;
  return (
    <Flex direction="column" gap="64px">
      <Header studyId={studyId} />
      <Link href={`${routerPath.studyDetailInfo.href}/${studyId}`}>
        <Edit className={EditIconStyle} height={24} stroke="black" width={24} />
      </Link>
      <CheckAttendanceNumber />
      <Divider style={MinHeightFullDividerStyle} />
      <AssignmentList studyId={studyId} />
      <Divider style={MinHeightFullDividerStyle} />
      <StudyAnnouncement studyId={studyId} />
      <Divider style={MinHeightFullDividerStyle} />
      <CurriculumList studyId={studyId} />
      <Space height={64} />
    </Flex>
  );
};

export default StudyPage;

const MinHeightFullDividerStyle = {
  minHeight: "1.2px",
};

const EditIconStyle = css({
  position: "absolute",
  right: "100px",
  top: "57px",
  cursor: "pointer",
});
