"use client";
import { Flex } from "@styled-system/jsx";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { useRouter } from "next/navigation";
import type { AssignmentStatusType } from "types/entities/study";
import Button from "wowds-ui/Button";

const CancelStudyButton = ({
  descriptionLink,
  studyDetailId,
  assignmentStatus,
}: {
  descriptionLink: string;
  studyDetailId: number;
  assignmentStatus: AssignmentStatusType;
}) => {
  const router = useRouter();
  const handleCancelAssignment = async (studyDetailId: number) => {
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
          size="sm"
          variant="outline"
          onClick={() => router.push(descriptionLink)}
        >
          과제 내용보기
        </Button>
      ) : (
        <Flex gap="sm">
          <Button
            color="sub"
            size="sm"
            variant="sub"
            onClick={() => handleCancelAssignment(studyDetailId)}
          >
            과제 휴강처리
          </Button>
          <Button
            size="sm"
            variant="solid"
            onClick={() => {
              console.log("TODO: 과제 개설 페이지 연결");
            }}
          >
            과제 개설하기
          </Button>
        </Flex>
      )}
    </>
  );
};

export default CancelStudyButton;
