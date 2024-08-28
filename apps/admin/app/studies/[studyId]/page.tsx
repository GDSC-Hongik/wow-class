import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import Divider from "wowds-ui/Divider";

import StudyAnnouncement from "./_components/announcement/StudyAnnouncement";
import AssignmentList from "./_components/assignment/AssignmentList";
import CheckAttendanceNumber from "./_components/attendance/CheckAttendanceNumber";
import CurriculumList from "./_components/curriculum/CurriculumList";
import Header from "./_components/header/Header";

const StudyPage = ({ params }: { params: { studyId: string } }) => {
  const { studyId } = params;
  return (
    <Flex direction="column" gap="64px" overflow="scroll" scrollbarWidth="none">
      <Header studyId={studyId} />
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
