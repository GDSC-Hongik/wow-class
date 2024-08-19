"use client";

import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { useCallback, useEffect, useState } from "react";
import { Edit, Trash, Warn } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextField from "wowds-ui/TextField";

interface RepositorySubmissionBoxProps {
  repositoryLink: string;
}

type RepositorySubmissionStatus = "none" | "editing" | "submitted";

export const RepositorySubmissionBox = ({
  repositoryLink,
}: RepositorySubmissionBoxProps) => {
  const [url, setUrl] = useState(repositoryLink);
  const [isInitialSubmit, setIsInitialSubmit] = useState(true);
  const [status, setStatus] = useState<RepositorySubmissionStatus>("none");

  const handleClickChange = useCallback((value: string) => {
    setUrl(value);
  }, []);

  const handleClickEditButton = useCallback(() => {
    setStatus("editing");
  }, []);

  const handleClickSubmitButton = useCallback(async () => {
    if (isInitialSubmit) {
      setIsInitialSubmit(false);
    } else {
      console.log("모달 오픈");
    }
    setStatus("submitted");
    //TODO: studyHistoryId 넣어주기
    //await studyHistoryApi.putRepository(1, url);
  }, [isInitialSubmit]);

  useEffect(() => {
    if (isInitialSubmit) {
      setStatus(repositoryLink ? "submitted" : "none");
    }
  }, [isInitialSubmit, repositoryLink]);

  return (
    <Box
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
            {status === "submitted" && (
              <Tag color="blue" variant="solid2">
                제출 완료
              </Tag>
            )}
          </Flex>
          <Space height={4} />
          {status === "none" && (
            <Flex alignItems="center" gap="xxs">
              <Warn fill="error" stroke="error" />
              <Text color="error" typo="body1">
                입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
              </Text>
            </Flex>
          )}
          {status === "submitted" && (
            <Text color="sub">최초 과제 제출 전 까지만 수정이 가능해요.</Text>
          )}
          <Space height={26} />
          {status !== "submitted" && (
            <TextField
              label=""
              placeholder="URL 을 입력하세요"
              value={url}
              onChange={handleClickChange}
            />
          )}
          {status === "submitted" && (
            <Flex
              backgroundColor="backgroundAlternative"
              borderRadius="5px"
              color="sub"
              justifyContent="space-between"
              paddingX="24px"
              paddingY="18px"
              textStyle="h2"
            >
              {url}
              <Flex gap="xs" marginLeft="auto">
                <Edit stroke="textBlack" onClick={handleClickEditButton} />
                <Trash stroke="textBlack" />
              </Flex>
            </Flex>
          )}
          <Space height={62} />
          <Button
            style={{ maxWidth: "100%" }}
            onClick={handleClickSubmitButton}
          >
            입력하기
          </Button>
        </>
      }
    />
  );
};
