"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { routePath } from "constants/routePath";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { RepositorySubmissionStatusType } from "types/entities/myAssignment";
import { Edit, Trash, Warn } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextField from "wowds-ui/TextField";
interface RepositorySubmissionBoxProps {
  repositoryLink: string;
}

export const RepositorySubmissionBox = ({
  repositoryLink: initialUrl,
}: RepositorySubmissionBoxProps) => {
  const [url, setUrl] = useState(initialUrl);
  const [isInitialSubmit, setIsInitialSubmit] = useState(true);
  const [repositorySubmissionStatus, setRepositorySubmissionStatus] =
    useState<RepositorySubmissionStatusType>("EDITING");

  const router = useRouter();
  const handleClickChange = useCallback((value: string) => {
    setUrl(value);
  }, []);

  const handleClickEditButton = useCallback(() => {
    setRepositorySubmissionStatus("EDITING");
  }, []);

  const handleClickSubmitButton = useCallback(async () => {
    if (isInitialSubmit && !initialUrl) {
      setIsInitialSubmit(false);
      setRepositorySubmissionStatus("SUBMITTED");
      //TODO: studyHistoryId 넣어주기
      //await studyHistoryApi.putRepository(1, url);
    } else {
      router.push(`${routePath["my-assignment-submit-modal"]}?url=${url}`);
    }
  }, [initialUrl, isInitialSubmit, router, url]);

  useEffect(() => {
    if (isInitialSubmit) {
      setRepositorySubmissionStatus(initialUrl ? "SUBMITTED" : "EDITING");
      initialUrl && setIsInitialSubmit(false);
    }
  }, [isInitialSubmit, initialUrl]);

  return (
    <Box
      style={boxStyle}
      variant="text"
      text={
        <>
          <Text color="primary" typo="label2">
            레포지토리
          </Text>
          <Space height={16} />
          <Flex gap="xs">
            <Text as="h2" typo="h2">
              과제 제출을 위한 레포지토리 URL 입력하기
            </Text>
            {repositorySubmissionStatus === "SUBMITTED" && (
              <Tag color="blue" variant="solid2">
                제출 완료
              </Tag>
            )}
          </Flex>
          <Space height={4} />
          {isInitialSubmit && repositorySubmissionStatus === "EDITING" && (
            <Flex alignItems="center" gap="xxs">
              <Warn fill="error" stroke="error" />
              <Text color="error" typo="body1">
                입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
              </Text>
            </Flex>
          )}
          {repositorySubmissionStatus === "SUBMITTED" && (
            <Text color="sub">최초 과제 제출 전 까지만 수정이 가능해요.</Text>
          )}
          <Space height={26} />
          {repositorySubmissionStatus === "EDITING" && (
            <TextField
              label=""
              placeholder="URL 을 입력하세요"
              value={url}
              onChange={handleClickChange}
            />
          )}
          {repositorySubmissionStatus === "SUBMITTED" && (
            <Flex className={urlBoxStyle}>
              {url}
              <Flex gap="xs" marginLeft="auto">
                <Edit stroke="textBlack" onClick={handleClickEditButton} />
                <Trash stroke="textBlack" />
              </Flex>
            </Flex>
          )}
          <Space height={62} />
          {repositorySubmissionStatus === "EDITING" && (
            <Button
              style={{ maxWidth: "100%" }}
              onClick={handleClickSubmitButton}
            >
              입력하기
            </Button>
          )}
        </>
      }
    />
  );
};

const urlBoxStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "5px",
  color: "sub",
  justifyContent: "space-between",
  paddingX: "24px",
  paddingY: "18px",
  textStyle: "h2",
});

const boxStyle = {
  minWidth: "484px",
};
