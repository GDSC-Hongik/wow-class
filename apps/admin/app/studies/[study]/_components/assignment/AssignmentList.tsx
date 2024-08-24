import { Space, Text } from "@wow-class/ui";
import { studyInfoApi } from "apis/study/studyInfoApi";

import AssignmentItem from "./AssignmentItem";

const AssignmentList = async ({ studyId }: { studyId: string }) => {
  const assignmentList = await studyInfoApi.getAssignmentList(
    parseInt(studyId, 10)
  );

  return (
    <section aria-label="assignment-list">
      <Text typo="h2">주차별 과제</Text>
      <Space height={24} />
      {assignmentList?.map((assignment, index) => {
        return (
          <AssignmentItem
            assignment={assignment}
            key={`studyDetailId-${index}`}
          />
        );
      })}
    </section>
  );
};

export default AssignmentList;
