import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import { EmptyStudy } from "../_components";
import { AssignmentHistory } from "./_components";
import { AssignmentContent } from "./_components/AssignmentContent";
import { AssignmentDescription } from "./_components/AssignmentDescription";
import { AssignmentHeader } from "./_components/AssignmentHeader";

const MyAssignmentPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();
  return myOngoingStudyInfoData?.studyId ? (
    <>
      <AssignmentHeader />
      <Space height={8} />
      <AssignmentDescription />
      <Space height={48} />
      <AssignmentContent />
      <AssignmentHistory />
    </>
  ) : (
    <EmptyStudy />
  );
};

export default MyAssignmentPage;
