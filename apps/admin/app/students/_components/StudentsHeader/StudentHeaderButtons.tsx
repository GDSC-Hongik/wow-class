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
      <Button
        aria-label="수료 및 우수 처리 취소하기"
        size="sm"
        variant="outline"
        onClick={handleClickCancelButton}
      >
        취소하기
      </Button>
      <Button
        aria-label={`${achievement && outstandingRoundMap[achievement]} ${type} 하기`}
        asProp={Link}
        disabled={!students.size}
        href={students.size ? "/students/status" : ""}
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
