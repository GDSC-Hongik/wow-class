import { Flex } from "@styled-system/jsx";
import type {
  MyStudyListApiResponseDto,
  StudyListApiResponseDto,
} from "types/dtos/studyList";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import DropDownTrigger from "./DropDownTrigger";

const StudyDropDown = ({
  studyList,
}: {
  studyList: StudyListApiResponseDto[] | MyStudyListApiResponseDto[];
}) => {
  return (
    <Flex align="center" color="primary" gap="sm">
      테스트
      <DropDown
        style={{ width: "16rem", cursor: "default" }}
        trigger={<DropDownTrigger />}
      >
        {studyList.map(
          (study: StudyListApiResponseDto | MyStudyListApiResponseDto) => (
            <DropDownOption
              key={study.studyId}
              text={study.title}
              value={study.studyId.toString()}
            />
          )
        )}
      </DropDown>
    </Flex>
  );
};

export default StudyDropDown;
