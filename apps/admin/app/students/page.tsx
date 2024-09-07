"use client";

import { Flex } from "@styled-system/jsx";
import { studyApi } from "apis/study/studyApi";
import useFetchStudents from "hooks/fetch/useFetchStudents";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";

import StudentList from "./_components/StudentList";
import StudentsHeader from "./_components/StudentsHeader";
import { studyAtom } from "./_contexts/StudyProvider";

const StudentsPage = () => {
  const [studyList, setStudyList] = useState<StudyListApiResponseDto[]>();
  const [study, setStudy] = useAtom(studyAtom);

  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await isAdmin();
      if (adminStatus) {
        const data = adminStatus
          ? await studyApi.getStudyList()
          : await studyApi.getMyStudyList();

        if (data && data.length && data[0]) {
          setStudyList(data);
          setStudy({ studyId: data[0].studyId, title: data[0].title });
        }
      }
    };

    fetchData();
  }, [setStudy]);

  const student = useFetchStudents(study);
  if (!studyList) return null;

  return (
    <Flex direction="column" gap="3rem">
      <StudentsHeader studyList={studyList} />
      <StudentList studentList={student.studentList} />
    </Flex>
  );
};

export default StudentsPage;
