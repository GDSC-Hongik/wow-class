import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";

import type { StudyAtomprops } from "@/students/_contexts/StudyProvider";

const useFetchStudents = (
  study: StudyAtomprops | undefined
): { studentList: StudyStudentApiResponseDto[] | [] } => {
  const [studentList, setStudentList] = useState<
    StudyStudentApiResponseDto[] | []
  >([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      if (study) {
        const studentsData = await studyApi.getStudyStudents(study.studyId);
        if (studentsData) setStudentList(studentsData);
      }
    };

    fetchStudentsData();
  }, [study]);

  return { studentList };
};

export default useFetchStudents;
