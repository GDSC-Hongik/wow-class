import { createStudyApi } from "apis/study/createStudyApi";
import { routerPath } from "constants/router/routerPath";
import { tags } from "constants/tags";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import { revalidateTagByName } from "utils/revalidateTagByName";

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
      revalidateTagByName(tags.curriculums);
      const timerId = setTimeout(() => {
        //TODO: 스터디 작성 페이지로 라우팅 되도록 수정
        router.push(`${routerPath.root.href}`);
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
