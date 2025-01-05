"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useOpenState } from "@wow-class/ui/hooks";
import { myStudyApi } from "apis/myStudyApi";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import { useCallback, useState } from "react";
import type { RepositorySubmissionStatusType } from "types/entities/myAssignment";
import { isGithubRepositoryUrl } from "utils/isGithubRepositoryUrl";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Edit, Trash } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextField from "wowds-ui/TextField";

interface RepositorySubmissionBoxProps {
  repositoryLink: string;
}

const repositoryInfoMessage = "과제 제출 후에도 레포지토리 수정이 가능해요.";

export const RepositorySubmissionBox = ({
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
  const { open, onOpen, onClose } = useOpenState();

  const handleClickEditButton = useCallback(() => {
    setErrorState({
      isError: false,
      errorMessage: "",
    });
    setRepositorySubmissionStatus("EDITING");
  }, []);

  const handleClickDeleteButton = useCallback(() => {
    setRepositoryUrl("");
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
      onOpen();
    }
  }, [repositoryUrl, onOpen]);

  const handleClickModalSubmitButton = async () => {
    const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

    if (!myOngoingStudyInfoData?.studyId) {
      return;
    }
    const { success } = await studyHistoryApi.putRepository(
      myOngoingStudyInfoData.studyId,
      repositoryUrl
    );
    if (success) {
      revalidateTagByName(tags.studyDetailDashboard);
      setRepositorySubmissionStatus("SUBMITTED");
    }
    onClose();
  };

  return (
    <>
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
              {repositorySubmissionStatus === "SUBMITTED" && (
                <Tag color="blue" variant="solid2">
                  제출 완료
                </Tag>
              )}
            </Flex>
            <Space height={4} />
            <>
              {repositorySubmissionStatus === "SUBMITTED" && (
                <>
                  <Text color="sub">{repositoryInfoMessage}</Text>
                  <Space height={26} />
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
              {repositorySubmissionStatus === "EDITING" && (
                <>
                  <Text color="error" typo="body1">
                    * 입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
                  </Text>
                  <Text color="sub" typo="body1">
                    * 레포지토리가 Private 상태면 입력할 수 없어요.
                  </Text>
                  <Space height={26} />
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
                  <Space height={46} />
                  <Button style={buttonStyle} onClick={handleClickSubmitButton}>
                    입력하기
                  </Button>
                </>
              )}
            </>
          </Flex>
        }
      />
      {open && (
        <Modal onClose={onClose}>
          <Flex alignItems="center" direction="column" width="21rem">
            <Text typo="h1">레포지토리를 입력하시겠어요?</Text>
            <Space height={12} />
            <Text color="sub">{repositoryInfoMessage}</Text>
            <Space height={8} />
            <div className={modalUrlBoxStyle}>{repositoryUrl}</div>
            <Space height={28} />
            <Button onClick={handleClickModalSubmitButton}>입력하기</Button>
          </Flex>
        </Modal>
      )}
    </>
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
  minWidth: "484px",
  width: "484px",
  height: "fit-content",
};

const iconStyle = {
  cursor: "pointer",
};

const buttonStyle = {
  maxWidth: "100%",
};

const textFieldStyle = {
  gap: "0px",
  height: "58px !important",
};
