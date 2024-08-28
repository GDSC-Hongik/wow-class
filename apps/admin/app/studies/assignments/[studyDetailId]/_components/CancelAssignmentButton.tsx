"use client";

import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const CancelAssignmentButton = ({
  studyDetailId,
}: {
  studyDetailId: number;
}) => {
  const handleClickCancelAssignment = async () => {
    const { success } = await studyApi.cancelAssignment(studyDetailId);
    if (success) {
      revalidateTagByName(tags.assignments);
    }
  };
  return (
    <Button size="sm" variant="outline" onClick={handleClickCancelAssignment}>
      과제 휴강처리
    </Button>
  );
};

export default CancelAssignmentButton;
