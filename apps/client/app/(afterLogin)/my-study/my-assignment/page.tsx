import { Space } from "@wow-class/ui";

import { AssignmentHistory } from "./_components";
import { AssignmentContent } from "./_components/AssignmentContent";
import { AssignmentDescription } from "./_components/AssignmentDescription";
import { AssignmentHeader } from "./_components/AssignmentHeader";

const MyAssignmentPage = () => {
  return (
    <>
      <AssignmentHeader />
      <Space height={8} />
      <AssignmentDescription />
      <Space height={48} />
      <AssignmentContent />
      <AssignmentHistory />
    </>
  );
};

export default MyAssignmentPage;
