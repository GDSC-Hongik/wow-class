import { Space } from "@wow-class/ui";
import { routePath } from "constants/routePath";
import { tags } from "constants/tags";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import type { RepositorySubmissionStatusType } from "types/entities/myAssignment";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

interface RepositorySubmissionInputFieldProps {
  repositoryUrl: string;
  setRepositoryUrl: (value: string) => void;
  repositorySubmissionStatus: RepositorySubmissionStatusType;
  setRepositorySubmissionStatus: (
    value: RepositorySubmissionStatusType
  ) => void;
}

export const RepositorySubmissionInputField = ({
  repositoryUrl,
  setRepositoryUrl,
  repositorySubmissionStatus,
  setRepositorySubmissionStatus,
}: RepositorySubmissionInputFieldProps) => {
  const router = useRouter();
  const handleChange = useCallback(
    (value: string) => {
      setRepositoryUrl(value);
    },
    [setRepositoryUrl]
  );

  const handleClickSubmitButton = useCallback(async () => {
    if (repositorySubmissionStatus === "EDITING_WITH_WARNING") {
      setRepositorySubmissionStatus("SUBMITTED");
      // const studyHistoryId = useMatchedStudyHistoryId();
      // await studyHistoryApi.putRepository(1, repositoryUrl);
      revalidateTagByName(tags.studyDetailDashboard);
    } else {
      router.push(
        `${routePath["my-assignment-repository-url-confirmation"]}?repositoryUrl=${repositoryUrl}`
      );
    }
  }, [
    repositorySubmissionStatus,
    setRepositorySubmissionStatus,
    router,
    repositoryUrl,
  ]);
  return (
    <div>
      <TextField
        label=""
        placeholder="URL 을 입력하세요"
        style={{ gap: "0px" }}
        value={repositoryUrl}
        onChange={handleChange}
      />
      <Space height={62} />
      <Button style={{ maxWidth: "100%" }} onClick={handleClickSubmitButton}>
        입력하기
      </Button>
    </div>
  );
};
