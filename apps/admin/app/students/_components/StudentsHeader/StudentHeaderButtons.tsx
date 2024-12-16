import { outstandingRoundMap } from "constants/status/outstandigOptions";
import { useAtom, useAtomValue } from "jotai";
import Link from "next/link";
import Button from "wowds-ui/Button";

import {
  enabledOutstandingStudentsAtom,
  outstandingStudentsAtom,
  selectedStudentsAtom,
} from "../../_contexts/StudyProvider";
import OutstandingDropDown from "../OutstandingDropDown";

const StudentsHeaderButtons = () => {
  const [{ enabled }, setEnabledOutstandingStudents] = useAtom(
    enabledOutstandingStudentsAtom
  );
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);
  const [{ students }, setSelectedStudents] = useAtom(selectedStudentsAtom);

  const handleClickCancelButton = () => {
    setEnabledOutstandingStudents({ enabled: false });
    setSelectedStudents({ firstStudentName: "", students: new Set() });
  };

  return enabled ? (
    <>
      <Button size="sm" variant="outline" onClick={handleClickCancelButton}>
        취소하기
      </Button>
      <Button
        asProp={Link}
        disabled={!students.size}
        href={students.size ? "/students/outstanding" : ""}
        size="sm"
      >
        {achievement && `${outstandingRoundMap[achievement]} ${type}`}
      </Button>
    </>
  ) : (
    <>
      <OutstandingDropDown type="처리" />
      <OutstandingDropDown type="철회" />
    </>
  );
};

export default StudentsHeaderButtons;
