import { Flex } from "@styled-system/jsx";
import { useAtom } from "jotai";
import type { ReactNode } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import { studyAtom } from "../_contexts/StudyProvider";
import DropDownTrigger from "./DropDownTrigger";

const StudyDropDown = ({
  studyList,
}: {
  studyList: StudyListApiResponseDto[];
}) => {
  const [study, setStudy] = useAtom(studyAtom);

  if (!study) return null;

  return (
    <DropDown
      trigger={
        <Flex
          align="center"
          color="primary"
          cursor="pointer"
          gap="sm"
          width="20rem"
        >
          {study.title}
          <DropDownTrigger />
        </Flex>
      }
      onChange={(value: { selectedValue: string; selectedText: ReactNode }) => {
        setStudy({
          studyId: +value.selectedValue,
          title: value.selectedText,
        });
      }}
    >
      {studyList.map((study: StudyListApiResponseDto) => (
        <DropDownOption
          key={study.studyId}
          style={{ cursor: "pointer" }}
          text={study.title}
          value={study.studyId.toString()}
        />
      ))}
    </DropDown>
  );
};

export default StudyDropDown;
