import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import { EmptyStudy } from "./_components";

const MyStudyPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  return myOngoingStudyInfoData?.studyId ? (
    <>
      {/* <Header /> */}
      <Space height={48} />

      <Space height={64} />
      <Space height={64} />
      <Space height={35} />
    </>
  ) : (
    <EmptyStudy />
  );
};

export default MyStudyPage;
