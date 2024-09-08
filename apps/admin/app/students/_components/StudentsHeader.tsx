import { Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";
import type { CSSProperties } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";

import StudyDropDown from "./StudyDropDown";

const StudentsHeader = ({
  studyList,
}: {
  studyList: StudyListApiResponseDto[];
}) => {
  return (
    <Text as="h1" style={titleStyle} typo="h1">
      수강생 관리 <ItemSeparator height={6} width={6} />
      <StudyDropDown studyList={studyList} />
    </Text>
  );
};

const titleStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  whiteSpace: "nowrap",
};

export default StudentsHeader;
