"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import { useCallback, useState } from "react";
import type { RepositorySubmissionStatusType } from "types/entities/myAssignment";
import { isGithubRepositoryUrl } from "utils/isGithubRepositoryUrl";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Edit } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

interface RepositorySubmissionBoxProps {
  studyId: number;
  repositoryLink: string;
}

const repositoryInfoMessage = "레포지토리는 한번 입력 후에도 수정 가능해요.";

export const RepositorySubmissionBox = ({
  studyId,
  repositoryLink: initialRepositoryUrl,
}: RepositorySubmissionBoxProps) => {
  const [repositoryUrl, setRepositoryUrl] = useState(initialRepositoryUrl);
  const [repositorySubmissionStatus, setRepositorySubmissionStatus] =
    useState<RepositorySubmissionStatusType>(
      initialRepositoryUrl ? "SUBMITTED" : "EDITING"
    );
  const [errorState, setErrorState] = useState<{
    isError: boolean;
    errorMessage: string;
  }>({
    isError: false,
    errorMessage: "",
  });

  const handleClickEditButton = useCallback(() => {
    setErrorState({
      isError: false,
      errorMessage: "",
    });
    setRepositorySubmissionStatus("EDITING");
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      setRepositoryUrl(value);
    },
    [setRepositoryUrl]
  );

  const handleSuccessRepositorySubmit = useCallback(async () => {
    const { success } = await studyHistoryApi.putRepository(
      studyId,
      repositoryUrl as string
    );
    if (success) {
      revalidateTagByName(tags.studyDetailDashboard);
      setRepositorySubmissionStatus("SUBMITTED");
    }
  }, [studyId, repositoryUrl, setRepositorySubmissionStatus]);

  const handleClickSubmitButton = useCallback(async () => {
    if (!repositoryUrl) {
      setErrorState({
        isError: true,
        errorMessage: "빈 URL은 입력할 수 없어요.",
      });
    } else if (!isGithubRepositoryUrl(repositoryUrl)) {
      setErrorState({
        isError: true,
        errorMessage: "GitHub 레포지토리 URL을 입력해야 해요.",
      });
    } else {
      setErrorState({
        isError: false,
        errorMessage: "",
      });
      handleSuccessRepositorySubmit();
    }
  }, [handleSuccessRepositorySubmit, repositoryUrl]);

  return (
    <Flex gap="50px">
      <Text typo="body1">레포지토리</Text>
      <div style={{ width: "100%" }}>
        <Box
          style={boxStyle}
          variant="text"
          text={
            <Flex direction="column" width="100%">
              <Flex alignItems="center" gap="xs">
                <Flex flexDirection="column" justifyContent="space-between">
                  <Text as="h2" typo="h2">
                    과제 제출을 위한 레포지토리 URL 입력
                  </Text>
                  {repositorySubmissionStatus === "SUBMITTED" && (
                    <>
                      <Text color="sub">{repositoryInfoMessage}</Text>
                    </>
                  )}
                  {repositorySubmissionStatus === "EDITING" && (
                    <div>
                      <Text color="error" typo="body1">
                        * 입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
                      </Text>
                      <Text color="sub" typo="body1">
                        * 레포지토리가 Private 상태면 입력할 수 없어요.
                      </Text>
                    </div>
                  )}
                </Flex>
                <Space height={4} />

                <>
                  {repositorySubmissionStatus === "SUBMITTED" && (
                    <>
                      <Flex className={urlBoxStyle}>
                        <div className={overflowTextStyle}>{repositoryUrl}</div>
                        <Flex gap="xs" marginLeft="auto">
                          <Edit
                            height={24}
                            stroke="textBlack"
                            style={iconStyle}
                            width={24}
                            onClick={handleClickEditButton}
                          />
                        </Flex>
                      </Flex>
                    </>
                  )}
                  {repositorySubmissionStatus === "EDITING" && (
                    <Flex gap="xs" height={42}>
                      <TextField
                        error={errorState.isError}
                        {...(errorState.isError && {
                          helperText: <li>{errorState.errorMessage}</li>,
                        })}
                        label=""
                        placeholder="URL 을 입력하세요"
                        style={textFieldStyle}
                        value={repositoryUrl}
                        onChange={handleChange}
                      />

                      <Button
                        style={buttonStyle}
                        onClick={handleClickSubmitButton}
                      >
                        입력
                      </Button>
                    </Flex>
                  )}
                </>
              </Flex>
            </Flex>
          }
        />
      </div>
    </Flex>
  );
};

const overflowTextStyle = css({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
const urlBoxStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "5px",
  color: "sub",
  justifyContent: "space-between",
  paddingX: "24px",
  paddingY: "18px",
  textStyle: "h2",
  width: "436px",
});

const modalUrlBoxStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "5px",
  color: "sub",
  paddingX: "lg",
  paddingY: "sm",
  textStyle: "h2",
  width: "375px",
});
const boxStyle = {
  width: "100%",
  height: "fit-content",
  minWidth: "100%",
};

const iconStyle = {
  cursor: "pointer",
};

const buttonStyle = {};

const textFieldStyle = {
  gap: "0px",
  height: "58px !important",
};
