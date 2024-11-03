import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
import type {
  PageStudyStudentApiResponseDto,
  StudyStudentApiResponseDto,
} from "types/dtos/studyStudent";

import type { StudyAtomprops } from "@/students/_contexts/StudyProvider";

const PAGE_SIZE = 10;

const useFetchStudents = (
  study: StudyAtomprops | undefined,
  page: number
): {
  studentList: StudyStudentApiResponseDto[] | [];
  pageInfo: Omit<PageStudyStudentApiResponseDto, "content">;
} => {
  const [studentList, setStudentList] = useState<
    StudyStudentApiResponseDto[] | []
  >([]);
  const [pageInfo, setPageInfo] =
    useState<Omit<PageStudyStudentApiResponseDto, "content">>(null);

  useEffect(() => {
    const fetchStudentsData = async () => {
      if (study) {
        const studentsData = await studyApi.getStudyStudents(study.studyId, {
          page: page - 1,
          size: PAGE_SIZE,
          sort: [],
        });
        if (studentsData) {
          const { content, ...rest } = studentsData;
          setStudentList(content);
          setPageInfo(rest);
        }
      }
    };

    fetchStudentsData();
  }, [study, page]);

  return { studentList, pageInfo };
};

export default useFetchStudents;
