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
  const { students } = useAtomValue(selectedStudentsAtom);

  const handleClickCancelButton = () => {
    setEnabledOutstandingStudents({ enabled: false });
  };

  return enabled ? (
    <>
      <Button size="sm" variant="outline" onClick={handleClickCancelButton}>
        취소하기
      </Button>
      <Button
        asProp={Link}
        disabled={!students.length}
        href={students.length ? "/students/outstanding" : ""}
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
