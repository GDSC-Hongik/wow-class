import { Flex } from "@styled-system/jsx";
import { useAtom, useSetAtom } from "jotai";
import type { ReactNode } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import {
  enabledOutstandingStudentsAtom,
  selectedStudentsAtom,
  studyAtom,
} from "../../_contexts/StudyProvider";
import DropDownTrigger from "./DropDownTrigger";

const StudyDropDown = ({
  studyList,
}: {
  studyList: StudyListApiResponseDto[];
}) => {
  const [study, setStudy] = useAtom(studyAtom);
  const setSelectedStudents = useSetAtom(selectedStudentsAtom);
  const setEnabled = useSetAtom(enabledOutstandingStudentsAtom);

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
        setSelectedStudents({
          firstStudentName: "",
          students: new Set(),
        });
        setEnabled({
          enabled: false,
        });
      }}
    >
      {studyList.map((studyItem: StudyListApiResponseDto) => (
        <DropDownOption
          key={studyItem.study.studyId}
          style={{ cursor: "pointer" }}
          text={studyItem.study.title}
          value={studyItem.study.studyId.toString()}
        />
      ))}
    </DropDown>
  );
};

export default StudyDropDown;
