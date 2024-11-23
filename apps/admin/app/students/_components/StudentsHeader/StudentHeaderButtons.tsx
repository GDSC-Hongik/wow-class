import { outstandingRoundMap } from "constants/status/outstandigOptions";
import { useAtom, useAtomValue } from "jotai";
import Link from "next/link";
import Button from "wowds-ui/Button";

import {
  outstandingStudentsAtom,
  selectedStudentsAtom,
} from "../../_contexts/StudyProvider";
import OutstandingDropDown from "../OutstandingDropDown";

const StudentsHeaderButtons = () => {
  const [outstandingStudents, setOutstandingStudents] = useAtom(
    outstandingStudentsAtom
  );
  const { type, achievement, enabled } = outstandingStudents;
  const { students } = useAtomValue(selectedStudentsAtom);

  const handleClickCancelButton = () => {
    setOutstandingStudents({
      ...outstandingStudents,
      enabled: false,
    });
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
