import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import ItemSeparator from "components/ItemSeparator";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";

import StudyDropDown from "./StudyDropDown";

const StudentsHeader = ({
  studyList,
  studyId,
  studentLength,
}: {
  studyList: StudyListApiResponseDto[];
  studyId: number;
  studentLength: number;
}) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await studyApi.getStudyStudentsExcel(studyId);
      const blob = new Blob([response], {
        type: "application/vnd.ms-excel",
      });
      const url = URL.createObjectURL(blob);
      if (url) setUrl(url);
    };

    if (studentLength) fetchData();
  }, [studyId, studentLength]);

  return (
    <Flex justify="space-between" paddingBottom="1.5rem">
      <Text as="h1" style={titleStyle} typo="h1">
        수강생 관리 <ItemSeparator height={6} width={6} />
        <StudyDropDown studyList={studyList} />
      </Text>
      {studyId && !!studentLength && (
        <styled.a download="study.xls" href={url}>
          <Image
            alt="다운로드"
            height={24}
            src="/images/download.svg"
            width={24}
          />
        </styled.a>
      )}
    </Flex>
  );
};

const titleStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  whiteSpace: "nowrap",
};

export default StudentsHeader;
