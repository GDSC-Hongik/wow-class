"use client";

import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { useState } from "react";
import { Edit, Trash, Warn } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextField from "wowds-ui/TextField";

export const RepositorySubmissionBox = () => {
  const [url, setUrl] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [isInitialSubmit, setIsInitialSubmit] = useState(true);

  const handleChange = (value: string) => {
    setUrl(value);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSubmitButtonClick = () => {
    if (isInitialSubmit) {
      setIsInitialSubmit(false);
    } else {
      console.log("모달 오픈");
    }
    setIsEditing(false);
  };

  return (
    <Box
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
            {!isEditing && (
              <Tag color="blue" variant="solid2">
                제출 완료
              </Tag>
            )}
          </Flex>
          <Space height={4} />
          {isEditing && isInitialSubmit && (
            <Flex alignItems="center" gap="xxs">
              <Warn fill="error" stroke="error" />
              <Text color="error" typo="body1">
                입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
              </Text>
            </Flex>
          )}
          {!isEditing && !isInitialSubmit && (
            <Text color="sub">최초 과제 제출 전 까지만 수정이 가능해요.</Text>
          )}
          <Space height={26} />
          {isEditing && (
            <TextField
              label=""
              placeholder="URL 을 입력하세요"
              value={url}
              onChange={handleChange}
            />
          )}
          {!isEditing && (
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
                <Edit stroke="textBlack" onClick={handleEditButtonClick} />
                <Trash stroke="textBlack" />
              </Flex>
            </Flex>
          )}
          <Space height={62} />
          <Button
            style={{ maxWidth: "100%" }}
            onClick={handleSubmitButtonClick}
          >
            입력하기
          </Button>
        </>
      }
    />
  );
};
