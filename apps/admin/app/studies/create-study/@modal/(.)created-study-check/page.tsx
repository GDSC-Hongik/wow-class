"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { createStudyApi } from "apis/study/createStudyApi";
import ItemSeparator from "components/ItemSeparator";
import { routerPath } from "constants/router/routerPath";
import { tags } from "constants/tags";
import useParseSearchParams from "hooks/useParseSearchParams";
import { useRouter, useSearchParams } from "next/navigation";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const CreatedStudyCheckModal = () => {
  const { parseQueryString } = useParseSearchParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { onClose } = useModalRoute();

  const data = parseQueryString<CreateStudyApiRequestDto>(
    searchParams.toString()
  );

  const studyName = data.title;
  const semester = `${data.semester.academicYear}-${data.semester.semesterType === "FIRST" ? "1" : "2"}`;

  const handleClickSubmitButton = async () => {
    const result = await createStudyApi.postCreateStudy(data);

    if (result.success) {
      await revalidateTagByName(tags.studyList);
      await revalidateTagByName(tags.myStudyList);
      window.alert("스터디 생성에 성공했어요.");
      router.push(`${routerPath.root.href}`);
    } else {
      window.alert("스터디 생성에 실패했어요.");
    }
  };

  return (
    <Modal>
      <Flex alignItems="center" direction="column" padding="24px" width="100%">
        <Flex alignItems="center" gap="sm" justify="center" marginBottom="2px">
          <Text color="primary" typo="h1">
            {studyName}
          </Text>
          <ItemSeparator height={6} width={6} />
          <Text color="primary" typo="h1">
            {semester}
          </Text>
        </Flex>
        <Text typo="h1">새로운 스터디를 개설하시겠어요?</Text>
        <Space height={28} />
        <Flex gap="sm" justify="center" width="21rem">
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleClickSubmitButton}>개설하기</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default CreatedStudyCheckModal;
