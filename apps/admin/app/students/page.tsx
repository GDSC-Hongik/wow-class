"use client";

import { Flex } from "@styled-system/jsx";
import { dashboardApi } from "apis/auth/dashboardApi";
import { studyApi } from "apis/study/studyApi";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import type {
  MyStudyListApiResponseDto,
  StudyListApiResponseDto,
} from "types/dtos/studyList";
import type { StudyStudentResponseDto } from "types/dtos/studyStudent";
import isAdmin from "utils/isAdmin";

import StudentList from "./_components/StudentList";
import StudentsHeader from "./_components/StudentsHeader";
import { studyAtom } from "./_components/StudyProvider";

const StudentsPage = () => {
  const [studyList, setStudyList] = useState<
    StudyListApiResponseDto[] | MyStudyListApiResponseDto[]
  >();
  const [studentList, setStudentList] = useState<
    StudyStudentResponseDto[] | null
  >(null);

  const [study, setStudy] = useAtom(studyAtom);

  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await isAdmin();
      if (adminStatus) {
        const data = adminStatus
          ? await studyApi.getStudyList()
          : await dashboardApi.getMyStudyList();

        if (data && data.length && data[0]) {
          setStudyList(data);
          setStudy({ studyId: data[0].studyId, title: data[0].title });
        }
      }
    };

    fetchData();
  }, [setStudy]);

  useEffect(() => {
    const fetchData = async () => {
      if (study) {
        const data = await studyApi.getStudyStudents(study.studyId);
        if (data) setStudentList(data);
      }
    };

    fetchData();
  }, [study]);

  if (!studyList) return null;

  return (
    <Flex direction="column" gap="3rem">
      <StudentsHeader studyList={studyList} />
      <StudentList studentList={studentList} />
    </Flex>
  );
};

export default StudentsPage;
