import { createStudyApi } from "apis/study/createStudyApi";
import { routerPath } from "constants/router/routerPath";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";

const useSubmitStudyDetailInfo = (
  studyId: number,
  studyDetailData: CreateStudyDetailInfoApiRequestDto
) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmitDetailInfo = async () => {
    try {
      await createStudyApi.postStudyDetailInfo(studyDetailData, studyId);
      setIsSuccess(true);
      const timerId = setTimeout(() => {
        router.push(`${routerPath.root.href}/${studyId}`);
      }, 500);
      return () => clearTimeout(timerId);
    } catch (error) {
      if (error instanceof Error) {
        setIsSuccess(false);
        window.alert(error.message);
        router.push(`${routerPath.root.href}`);
      }
    }
  };

  return { isSuccess, handleSubmitDetailInfo };
};

export default useSubmitStudyDetailInfo;
