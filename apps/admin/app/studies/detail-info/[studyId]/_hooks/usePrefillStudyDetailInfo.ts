import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";

const usePrefillStudyDetailInfo = (studyId: number) => {
  const [prefillStudyDetailInfo, setPrefillStudyInfo] =
    useState<CreateStudyDetailInfoApiRequestDto | null>(null);
  const [studyList, setStudyList] = useState<StudyListApiResponseDto[]>();
  const [headerInfo, setHeaderInfo] =
    useState<
      Pick<
        StudyListApiResponseDto["study"],
        "title" | "semester" | "mentorName" | "type"
      >
    >();

  useEffect(() => {
    {
      const fetchStudyListData = async () => {
        const admin = await isAdmin();
        const studyList = admin
          ? await studyApi.getStudyList()
          : await studyApi.getMyStudyList();
        setStudyList(studyList);
      };
      fetchStudyListData();
    }
  }, []);

  useEffect(() => {
    if (!studyList) return;

    const detailedStudy = studyList.find(
      (data) => data.study.studyId === Number(studyId)
    );

    const isAssignmentStudy = detailedStudy?.study.type === "ASSIGNMENT";
    if (detailedStudy) {
      setHeaderInfo({
        title: detailedStudy.study.title,
        semester: detailedStudy.study.semester,
        mentorName: detailedStudy.study.mentorName,
        type: detailedStudy.study.type,
      });
      setPrefillStudyInfo({
        title: detailedStudy.study.title,
        description: detailedStudy.study.description || "",
        descriptionNotionLink: detailedStudy.study.descriptionNotionLink || "",
        dayOfWeek: detailedStudy.study.dayOfWeek || "MONDAY",

        startTime: detailedStudy.study.startTime
          ? {
              hour: detailedStudy.study.startTime.hour,
              minute: detailedStudy.study.startTime.minute,
              second: detailedStudy.study.startTime.second,
              nano: detailedStudy.study.startTime.nano,
            }
          : undefined,

        endTime: detailedStudy.study.endTime
          ? {
              hour: detailedStudy.study.endTime.hour,
              minute: detailedStudy.study.endTime.minute,
              second: detailedStudy.study.endTime.second,
              nano: detailedStudy.study.endTime.nano,
            }
          : undefined,
        minAssignmentLength: detailedStudy.study.minAssignmentLength,
        studySessions:
          detailedStudy.studySessions?.map((session) => ({
            studySessionId: session.studySessionId,
            ...(isAssignmentStudy
              ? {}
              : {
                  lessonTitle: session.lessonTitle || "",
                  description: session.description || "",
                  lessonPeriod: session.lessonPeriod || null,
                }),
            assignmentTitle: session.assignmentTitle || "",
            assignmentDescriptionLink: session.assignmentDescriptionLink || "",
            assignmentPeriod: session.assignmentPeriod || null,
          })) || [],
      });
    }
  }, [studyList, studyId]);

  return { prefillStudyDetailInfo, headerInfo };
};

export default usePrefillStudyDetailInfo;
