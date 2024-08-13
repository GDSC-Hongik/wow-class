"use client";

import { Flex, styled } from "@styled-system/jsx";
import { useState } from "react";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextField from "wowds-ui/TextField";

export const TextFieldHomeworkBox = () => {
  const [value, setValue] = useState("");
  //TODO: 모달을 통해 제출 확인하는 부분 추가
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Box
      text={
        <>
          <styled.p color="primary" textStyle="label2">
            레포지토리
          </styled.p>
          <div style={{ height: "1rem" }} />
          <Flex gap="xs">
            <styled.p color="textBlack" textStyle="h2">
              과제 제출을 위한 레포지토리 URL 입력하기
            </styled.p>
            <Tag color="blue" variant="solid2">
              제출 완료
            </Tag>
          </Flex>
          <div style={{ height: "0.25rem" }} />
          <styled.p color="error" textStyle="body1">
            입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
          </styled.p>
          <div style={{ height: "1.63rem" }} />
          {!isSubmit && (
            <TextField
              label=""
              placeholder="URL 을 입력하세요"
              value={value}
              onChange={handleChange}
            />
          )}
          {isSubmit && (
            <Flex
              backgroundColor="backgroundAlternative"
              color="sub"
              paddingLeft="1.5rem"
              paddingY="1.1rem"
              textStyle="h2"
            >
              {value}
              <button
                onClick={() => {
                  setIsSubmit(false);
                }}
              >
                수정버튼
              </button>
            </Flex>
          )}
          <div style={{ height: "3.87rem" }} />
          <Button
            style={{ maxWidth: "100%" }}
            onClick={() => {
              setIsSubmit(true);
            }}
          >
            입력하기
          </Button>
        </>
      }
    />
  );
};
