"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { useCallback, useState } from "react";
import type { RepositorySubmissionStatusType } from "types/entities/myAssignment";
import { Edit, Trash, Warn } from "wowds-icons";
import Box from "wowds-ui/Box";
import Tag from "wowds-ui/Tag";

import { RepositorySubmissionInputField } from "./RepositorySubmissionInputField";

interface RepositorySubmissionBoxProps {
  repositoryLink: string;
}

export const RepositorySubmissionBox = ({
  repositoryLink: initialRepositoryUrl,
}: RepositorySubmissionBoxProps) => {
  const [repositoryUrl, setRepositoryUrl] = useState(initialRepositoryUrl);
  const [repositorySubmissionStatus, setRepositorySubmissionStatus] =
    useState<RepositorySubmissionStatusType>(
      initialRepositoryUrl ? "SUBMITTED" : "EDITING_WITH_WARNING"
    );

  const handleClickEditButton = useCallback(() => {
    setRepositorySubmissionStatus("EDITING");
  }, []);

  const handleClickDeleteButton = useCallback(() => {
    setRepositoryUrl("");
    setRepositorySubmissionStatus("EDITING_WITH_WARNING");
  }, []);

  return (
    <Box
      style={boxStyle}
      variant="text"
      text={
        <Flex direction="column" style={{ height: "260px" }}>
          <Text color="primary" typo="label2">
            레포지토리
          </Text>
          <Space height={16} />
          <Flex gap="xs">
            <Text as="h2" typo="h2">
              과제 제출을 위한 레포지토리 URL 입력하기
            </Text>
            {repositorySubmissionStatus !== "EDITING_WITH_WARNING" && (
              <Tag color="blue" variant="solid2">
                제출 완료
              </Tag>
            )}
          </Flex>
          <Space height={4} />
          <>
            {repositorySubmissionStatus === "SUBMITTED" && (
              <>
                <Text color="sub">
                  최초 과제 제출 전 까지만 수정이 가능해요.
                </Text>
                <Space height={26} />
                <Flex className={urlBoxStyle}>
                  {repositoryUrl}
                  <Flex gap="xs" marginLeft="auto">
                    <Edit
                      height={24}
                      stroke="textBlack"
                      style={iconStyle}
                      width={24}
                      onClick={handleClickEditButton}
                    />
                    <Trash
                      height={24}
                      stroke="textBlack"
                      style={iconStyle}
                      width={24}
                      onClick={handleClickDeleteButton}
                    />
                  </Flex>
                </Flex>
              </>
            )}
            {repositorySubmissionStatus === "EDITING_WITH_WARNING" && (
              <>
                <Flex alignItems="center" gap="xxs">
                  <Warn fill="error" stroke="error" />
                  <Text color="error" typo="body1">
                    입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
                  </Text>
                </Flex>
                <Space height={26} />
                <RepositorySubmissionInputField
                  repositorySubmissionStatus={repositorySubmissionStatus}
                  repositoryUrl={repositoryUrl}
                  setRepositorySubmissionStatus={setRepositorySubmissionStatus}
                  setRepositoryUrl={setRepositoryUrl}
                />
              </>
            )}
            {repositorySubmissionStatus === "EDITING" && (
              <>
                <Space height={56} />
                <RepositorySubmissionInputField
                  repositorySubmissionStatus={repositorySubmissionStatus}
                  repositoryUrl={repositoryUrl}
                  setRepositorySubmissionStatus={setRepositorySubmissionStatus}
                  setRepositoryUrl={setRepositoryUrl}
                />
              </>
            )}
          </>
        </Flex>
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

const iconStyle = {
  cursor: "pointer",
};
