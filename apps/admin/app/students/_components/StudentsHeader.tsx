import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";

import StudyDropDown from "./StudyDropDown";

const StudentsHeader = ({
  studyList,
}: {
  studyList: StudyListApiResponseDto[];
}) => {
  return (
    <Flex justify="space-between" paddingBottom="1.5rem">
      <Text as="h1" style={titleStyle} typo="h1">
        수강생 관리 <ItemSeparator height={6} width={6} />
        <StudyDropDown studyList={studyList} />
      </Text>
      <styled.button cursor="pointer">
        <Image
          alt="다운로드"
          height={24}
          src="/images/download.svg"
          width={24}
        />
      </styled.button>
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
