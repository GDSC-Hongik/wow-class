"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { createStudyApi } from "apis/study/createStudyApi";
import { studyApi } from "apis/study/studyApi";
import { routerPath } from "constants/router/routerPath";
import useParseSearchParams from "hooks/useParseSearchParams";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "wowds-ui/Button";

const StudyDetailInfoCheckModal = () => {
  const { closeModal } = useModalRoute();
  const { parseToJsonSearchParam, parseToStringSearchParams } =
    useParseSearchParams();
  const router = useRouter();
  const [saveDetailInfo, setSaveDetailInfo] = useState(false);
  const [studyName, setStudyName] = useState("");

  const data = parseToJsonSearchParam("data");
  const studyId = parseToStringSearchParams("studyId");

  useEffect(() => {
    const fetchStudyData = async () => {
      const response = await studyApi.getStudyBasicInfo(parseInt(studyId, 10));
      if (response) setStudyName(response.title);
    };
    fetchStudyData();
  }, [studyId]);

  useEffect(() => {
    if (saveDetailInfo) {
      const timerId = setTimeout(() => {
        router.push(`${routerPath.root.href}/${studyId}`);
      }, 500);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [saveDetailInfo, router, studyId]);

  const handleSubmitDetailInfo = async () => {
    const success = await createStudyApi.postStudyDetailInfo(
      data,
      parseInt(studyId, 10)
    );
    if (success) {
      setSaveDetailInfo(true);
    } else {
      await window.alert("스터디 상세 정보 저장에 실패했어요.");
      router.push(`${routerPath.root.href}`);
    }
  };

  return (
    <Modal>
      {saveDetailInfo ? (
        <Flex alignItems="center" direction="column" gap="4px">
          <Text as="h1" color="primary" typo="h1">
            {studyName}
          </Text>
          <Text as="h1" color="textBlack" typo="h1">
            상세 정보가 저장되었어요.
          </Text>
        </Flex>
      ) : (
        <>
          <Flex
            alignItems="center"
            direction="column"
            padding="24px"
            width="100%"
          >
            <Flex alignItems="center" justify="center" marginBottom="2px">
              <Text as="p" color="primary" typo="h1">
                {studyName}
              </Text>
              <Text as="p" typo="h1">
                의 상세정보
              </Text>
            </Flex>
            <Text as="p" typo="h1">
              입력 내용을 저장하시겠어요?
            </Text>
            <Space height={28} />
            <Flex gap="sm" justify="center" width="21rem">
              <Button variant="outline" onClick={closeModal}>
                취소
              </Button>
              <Button onClick={handleSubmitDetailInfo}>저장하기</Button>
            </Flex>
          </Flex>
        </>
      )}
    </Modal>
  );
};

export default StudyDetailInfoCheckModal;
