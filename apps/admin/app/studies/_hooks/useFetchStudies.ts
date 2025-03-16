import { studyApi } from "apis/study/studyApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";

export const useFetchStudies = () => {
  const [studyList, setStudyList] = useState<StudyListApiResponseDto[]>();
  const [adminStatus, setAdminStatus] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/studies") {
      const fetchStudyListData = async () => {
        const admin = await isAdmin();
        const studyList = admin
          ? await studyApi.getStudyList()
          : await studyApi.getMyStudyList();

        setStudyList(studyList);
        setAdminStatus(admin);
      };
      fetchStudyListData();
    }
  }, [pathName]);

  // 현재 개설되어있는 전체 스터디들의 진행 학기 목록
  const semesters = studyList?.map(
    (studyItem) =>
      `${studyItem.study.semester.academicYear}-${studyItem.study.semester.semesterType === "FIRST" ? 1 : 2}`
  );
  // 중복 제거, 내림차순 정렬한 진행 학기 목록
  const semesterList = semesters
    ?.filter((semester, idx) => semesters.indexOf(semester) === idx)
    .sort()
    .reverse();

  return { studyList, adminStatus, semesterList };
};
