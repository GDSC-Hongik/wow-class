"use client";

import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import useFetchStudents from "hooks/fetch/useFetchStudents";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";

import StudentFilter from "./_components/StudentFilter";
import StudentPagination from "./_components/StudentPagination";
import StudentsHeader from "./_components/StudentsHeader";
import StudentList from "./_components/StudentTable/StudentList";
import { studyAtom } from "./_contexts/StudyProvider";

const StudentsPage = () => {
  const [studyList, setStudyList] = useState<StudyListApiResponseDto[]>();
  const [selectedStudy, setSelectedStudy] = useAtom(studyAtom);

  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await isAdmin();
      const data = adminStatus
        ? await studyApi.getStudyList()
        : await studyApi.getMyStudyList();

      if (data && data.length && data[0]) {
        setStudyList(data);
        setSelectedStudy({ studyId: data[0].studyId, title: data[0].title });
      }
    };

    fetchData();
  }, [setSelectedStudy]);

  const [page, setPage] = useState(1);
  const handleClickChangePage = (nextPage: number) => {
    setPage(nextPage);
  };

  const { studentList, pageInfo } = useFetchStudents(selectedStudy, page);
  if (!selectedStudy) return null;
  if (!studyList) return <Text>담당한 스터디가 없어요.</Text>;

  return (
    <Flex direction="column" gap="1.5rem">
      <StudentsHeader
        studentLength={studentList.length}
        studyId={selectedStudy.studyId}
        studyList={studyList}
      />

      {/* TODO: 페이지네이션 API 필터 추가 후 주석 해제
      {studentList.length ? <StudentFilter /> : null} 
      */}
      <StudentList studentList={studentList} />
      <StudentPagination
        handleClickChangePage={handleClickChangePage}
        pageInfo={pageInfo}
      />
    </Flex>
  );
};

export default StudentsPage;
