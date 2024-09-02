import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";

const usePrefillStudyDetailInfo = (studyId: number) => {
  const [prefillStudyInfo, setPrefillStudyInfo] =
    useState<CreateStudyDetailInfoApiRequestDto | null>(null);

  useEffect(() => {
    const fetchStudyDetailInfo = async () => {
      const basicData = await studyApi.getStudyBasicInfo(studyId);
      const curriculumData = await studyApi.getCurriculumList(studyId);

      if (basicData || curriculumData) {
        setPrefillStudyInfo({
          notionLink: basicData?.notionLink || "",
          introduction: basicData?.introduction || "",
          studyCurriculums:
            curriculumData?.map((data) => ({
              studyDetailId: data.studyDetailId,
              title: data.title || "",
              description: data.description || "",
              difficulty: data.difficulty || undefined,
              status:
                data.curriculumStatus === "CANCELLED" ? "CANCELLED" : "NONE",
            })) || [],
        });
      }
    };
    fetchStudyDetailInfo();
  }, [studyId]);

  return prefillStudyInfo;
};

export default usePrefillStudyDetailInfo;
