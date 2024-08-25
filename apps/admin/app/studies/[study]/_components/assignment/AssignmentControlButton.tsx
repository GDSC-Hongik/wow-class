"use client";
import { Flex } from "@styled-system/jsx";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { tags } from "constants/tags";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { AssignStatusType } from "types/entities/assignStatus";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const AssignmentControlButton = ({
  descriptionLink,
  studyDetailId,
  assignmentStatus,
  week,
}: {
  descriptionLink: string;
  studyDetailId: number;
  assignmentStatus: AssignStatusType;
  week: number;
}) => {
  const router = useRouter();

  const handleCancelAssignment = async (studyDetailId: number) => {
    const { success } = await studyInfoApi.cancelAssignment(studyDetailId);
    if (success) {
      window.alert("휴강 처리에 성공했어요.");
      revalidateTagByName(tags.assignments);
    } else {
      window.alert("휴강 처리에 실패했어요.");
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
            as={Link}
            href={`/studies/${studyDetailId}/assignments/${week}/edit`}
            size="sm"
            variant="solid"
          >
            과제 개설하기
          </Button>
        </Flex>
      )}
    </>
  );
};

export default AssignmentControlButton;
