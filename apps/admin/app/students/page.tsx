"use client";

import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
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
  const [selectedStudy, setSelectedStudy] = useAtom(studyAtom);

  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await isAdmin();
      if (adminStatus) {
        const data = adminStatus
          ? await studyApi.getStudyList()
          : await studyApi.getMyStudyList();

        if (data && data.length && data[0]) {
          setStudyList(data);
          setSelectedStudy({ studyId: data[0].studyId, title: data[0].title });
        }
      }
    };

    fetchData();
  }, [setSelectedStudy]);

  const student = useFetchStudents(selectedStudy);
  if (!studyList) return <Text>담당한 스터디가 없어요.</Text>;

  return (
    <Flex direction="column" gap="3rem">
      <StudentsHeader studyList={studyList} />
      <StudentList studentList={student.studentList} />
    </Flex>
  );
};

export default StudentsPage;
