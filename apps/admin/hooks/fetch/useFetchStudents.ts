import { studyApi } from "apis/study/studyApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type {
  PaginatedStudyStudentResponseDto,
  StudyStudentApiResponseDto,
} from "types/dtos/studyStudent";

import type { StudyAtomprops } from "@/students/_contexts/StudyProvider";

const PAGE_SIZE = 10;

const useFetchStudents = (
  study: StudyAtomprops | undefined,
  page: number
): {
  studentList: StudyStudentApiResponseDto[] | [];
  pageInfo: Omit<PaginatedStudyStudentResponseDto, "content"> | null;
} => {
  const [studentList, setStudentList] = useState<
    StudyStudentApiResponseDto[] | []
  >([]);
  const [pageInfo, setPageInfo] = useState<Omit<
    PaginatedStudyStudentResponseDto,
    "content"
  > | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchStudentsData = async () => {
      if (study) {
        const studentsData = await studyApi.getStudyStudents(study.studyId, {
          page: page - 1,
          size: PAGE_SIZE,
        });
        if (studentsData) {
          const { content, ...rest } = studentsData;
          setStudentList(content);
          setPageInfo(rest);
        }
      }
    };

    fetchStudentsData();
  }, [study, page, pathname]);

  return { studentList, pageInfo };
};

export default useFetchStudents;
