"use client";
import { Flex } from "@styled-system/jsx";
import { studyInfoApi } from "apis/study/studyInfoApi";
import Link from "next/link";
import type { AssignmentStatusType } from "types/entities/study";
import Button from "wowds-ui/Button";

const AssignmentButton = ({
  studyDetailId,
  assignmentStatus,
}: {
  studyDetailId: number;
  assignmentStatus: AssignmentStatusType;
}) => {
  const handleCancelAssignment = async () => {
    const { success } = await studyInfoApi.cancelAssignment(studyDetailId);
    if (success) {
      console.log("휴강 처리에 성공했어요.");
    } else {
      console.log("휴강 처리에 실패했어요.");
    }
  };

  return (
    <>
      {assignmentStatus === "OPEN" ? (
        <Button
          asProp={Link}
          href={`/studies/assignments/${studyDetailId}`}
          size="sm"
          variant="outline"
        >
          과제 내용보기
        </Button>
      ) : (
        <Flex gap="sm">
          {assignmentStatus === "CANCELLED" ? (
            <>
              <Button size="sm" variant="sub">
                과제 휴강완료
              </Button>
              <Button disabled size="sm" variant="solid">
                과제 개설하기
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="sub" onClick={handleCancelAssignment}>
                과제 휴강처리
              </Button>
              <Button
                asProp={Link}
                href={`/studies/assignments/${studyDetailId}/edit-assignment`}
                size="sm"
                variant="solid"
              >
                과제 개설하기
              </Button>
            </>
          )}
        </Flex>
      )}
    </>
  );
};

export default AssignmentButton;
