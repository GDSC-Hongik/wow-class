"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { tags } from "constants/tags";
import useMatchedStudyHistoryId from "hooks/useMatchedStudyHistoryId";
import { useSearchParams } from "next/navigation";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const RepositoryUrlConfirmationModal = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get("repositoryUrl");
  //const studyHistoryId = useMatchedStudyHistoryId();

  const handleClickSubmitButton = async () => {
    //await studyHistoryApi.putRepository(studyHistoryId, url);
    //TODO: 제출 후에 RepositoryBox 를 SUBMITTED 로 상태로 바꿔줘야함.
    revalidateTagByName(tags.studyDetailDashboard);
  };
  return (
    <Modal>
      <Flex alignItems="center" direction="column" width="21rem">
        <Text typo="h1">레포지토리를 입력하시겠어요?</Text>
        <Space height={12} />
        <Text color="sub">최초 과제 제출 전까지 수정이 가능해요.</Text>
        <Space height={8} />
        <div className={urlBoxStyle}>{url}</div>
        <Space height={28} />
        <Button onClick={handleClickSubmitButton}>입력하기</Button>
      </Flex>
    </Modal>
  );
};

export default RepositoryUrlConfirmationModal;

const urlBoxStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "5px",
  color: "sub",
  paddingX: "lg",
  paddingY: "md",
  textStyle: "h2",
});
