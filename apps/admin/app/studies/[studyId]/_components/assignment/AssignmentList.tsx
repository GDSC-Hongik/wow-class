import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";

import AssignmentListItem from "./AssignmentListItem";

const AssignmentList = async ({ studyId }: { studyId: string }) => {
  const assignmentList = await studyApi.getAssignmentList(
    parseInt(studyId, 10)
  );

  return (
    <section aria-label="assignment-list">
      <Text typo="h2">주차별 과제</Text>
      <Space height={24} />
      {assignmentList?.map((assignment, index) => {
        return (
          <AssignmentListItem
            assignment={assignment}
            key={`studyDetailId-${index}`}
          />
        );
      })}
    </section>
  );
};

export default AssignmentList;
