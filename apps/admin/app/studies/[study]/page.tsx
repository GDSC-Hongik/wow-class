import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import Divider from "wowds-ui/Divider";

import AssignmentList from "./_components/assignment/AssignmentList";
import CheckAttendanceNumber from "./_components/attendance/CheckAttendanceNumber";
import Header from "./_components/header/Header";
import SessionList from "./_components/session/SessionList";

const StudyPage = ({ params }: { params: { study: string } }) => {
  return (
    <Flex direction="column" gap="64px" overflow="scroll" scrollbarWidth="none">
      <Header studyId={params.study} />
      <CheckAttendanceNumber />
      <Divider style={{ minHeight: "1.2px" }} />
      <AssignmentList studyId={params.study} />
      <Divider style={{ minHeight: "1.2px" }} />
      <SessionList studyId={params.study} />
      <Space height={64} />
    </Flex>
  );
};

export default StudyPage;
