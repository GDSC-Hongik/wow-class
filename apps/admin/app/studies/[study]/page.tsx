import { Flex, styled } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";

import AssignmentList from "./_components/AssignmentList";
import CheckAttendanceNumber from "./_components/CheckAttendanceNumber";
import Header from "./_components/Header";
import SessionList from "./_components/SessionList";
import StudyAnnouncement from "./_components/StudyAnnouncement";

const StudyPage = ({ params }: { params: { study: string } }) => {
  return (
    <Flex direction="column" gap="64px">
      <Header studyId={params.study} />
      <CheckAttendanceNumber />
      <styled.div backgroundColor="lightDisabled" height="1px" width="100%" />
      <AssignmentList studyId={params.study} />
      <styled.div backgroundColor="lightDisabled" height="1px" width="100%" />
      <StudyAnnouncement studyId={params.study} />
      <styled.div backgroundColor="lightDisabled" height="1px" width="100%" />
      <SessionList studyId={params.study} />
      <Space height={64} />
    </Flex>
  );
};

export default StudyPage;
