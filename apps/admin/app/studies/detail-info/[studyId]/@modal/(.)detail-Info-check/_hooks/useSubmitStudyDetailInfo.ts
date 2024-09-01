import { createStudyApi } from "apis/study/createStudyApi";
import { routerPath } from "constants/router/routerPath";
import { tags } from "constants/tags";
import { revalidateTag } from "next/cache";
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
    const data = await createStudyApi.postStudyDetailInfo(
      studyDetailData,
      studyId
    );
    if (data.success) {
      setIsSuccess(true);
      revalidateTag(tags.curriculums);
      const timerId = setTimeout(() => {
        router.push(`${routerPath.root.href}/${studyId}`);
      }, 500);
      return () => clearTimeout(timerId);
    } else {
      setIsSuccess(false);
      window.alert("스터디 상세 정보 저장에 실패했어요.");
      router.push(`${routerPath.root.href}`);
    }
  };

  return { isSuccess, handleSubmitDetailInfo };
};

export default useSubmitStudyDetailInfo;
