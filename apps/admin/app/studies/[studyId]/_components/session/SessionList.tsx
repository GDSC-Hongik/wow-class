import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";

import EmptySessionList from "./EmptySessionList";
import SessionListItem from "./SessionListItem";

const SessionList = async ({ studyId }: { studyId: string }) => {
  const sessionList = await studyApi.getSessionList(parseInt(studyId, 10));

  if (sessionList?.length === 0) {
    return <EmptySessionList />;
  }

  return (
    <section aria-label="session-list">
      <Text typo="h2">스터디 커리큘럼</Text>
      <Space height={24} />
      {sessionList?.map((session, index) => (
        <SessionListItem key={`sessionItem-${index}`} session={session} />
      ))}
    </section>
  );
};

export default SessionList;
