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
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Edit, Trash, Warn } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextField from "wowds-ui/TextField";

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
  const [error, setError] = useState(false);
  const { open, onOpen, onClose } = useOpenState();

  const handleClickEditButton = useCallback(() => {
    setError(false);
    setRepositorySubmissionStatus("EDITING");
  }, []);

  const handleClickDeleteButton = useCallback(() => {
    setRepositoryUrl("");
    setError(false);
    setRepositorySubmissionStatus("EDITING_WITH_WARNING");
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      setRepositoryUrl(value);
    },
    [setRepositoryUrl]
  );

  const handleClickSubmitButton = useCallback(async () => {
    if (!repositoryUrl) {
      setError(true);
    } else {
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
      onClose();
    }
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
                  <TextField
                    error={error}
                    {...(error && { helperText: errorMessage })}
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
              {repositorySubmissionStatus === "EDITING" && (
                <>
                  <Space height={56} />
                  <TextField
                    error={error}
                    {...(error && { helperText: errorMessage })}
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
            <Text color="sub">최초 과제 제출 전까지 수정이 가능해요.</Text>
            <Space height={8} />
            <div className={urlBoxStyle}>{repositoryUrl}</div>
            <Space height={28} />
            <Button onClick={handleClickModalSubmitButton}>입력하기</Button>
          </Flex>
        </Modal>
      )}
    </>
  );
};

const errorMessage = <li>빈 URL은 입력할 수 없습니다.</li>;

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
