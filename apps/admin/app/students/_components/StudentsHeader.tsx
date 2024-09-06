import { Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";
import type {
  MyStudyListApiResponseDto,
  StudyListApiResponseDto,
} from "types/dtos/studyList";

import StudyDropDown from "./StudyDropDown";

const StudentsHeader = ({
  studyList,
}: {
  studyList: StudyListApiResponseDto[] | MyStudyListApiResponseDto[];
}) => {
  return (
    <Text
      as="h1"
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      typo="h1"
    >
      수강생 관리 <ItemSeparator height={6} width={6} />
      <StudyDropDown studyList={studyList} />
    </Text>
  );
};

export default StudentsHeader;
