import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";
import useFetchStudentsExcelUrl from "hooks/fetch/useFetchStudentsExcelUrl";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";

import OutstandingDropDown from "./OutstandingDropDown";
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
  const url = useFetchStudentsExcelUrl({ studyId, studentLength });

  return (
    <Flex justify="space-between" paddingBottom="1.5rem">
      <Text as="h1" style={titleStyle} typo="h1">
        수강생 관리 <ItemSeparator height={6} width={6} />
        <StudyDropDown studyList={studyList} />
      </Text>
      <Flex align="center" gap="0.75rem">
        <OutstandingDropDown type="ADD" />
        <OutstandingDropDown type="DEL" />
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
