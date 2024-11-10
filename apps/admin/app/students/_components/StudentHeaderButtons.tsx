import { useAtom } from "jotai";
import Button from "wowds-ui/Button";

import { outstandingStudentsAtom } from "../_contexts/StudyProvider";
import OutstandingDropDown from "./OutstandingDropDown";

const StudentsHeaderButtons = () => {
  const [outstandingStudents, setOutstandingStudents] = useAtom(
    outstandingStudentsAtom
  );

  const { type, achievement, enabled } = outstandingStudents;

  const formatTypeToText = () => {
    if (type === "ADD") return "우수 처리";
    if (type === "DEL") return "우수 철회";
    return "";
  };

  const formatAchievementToText = () => {
    if (achievement === "FIRST_ROUND_OUTSTANDING_STUDENT") return "1차";
    if (achievement === "SECOND_ROUND_OUTSTANDING_STUDENT") return "2차";
    return "";
  };

  const buttonText = `${formatAchievementToText()} ${formatTypeToText()}`;

  return enabled ? (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          setOutstandingStudents({
            ...outstandingStudents,
            enabled: false,
          })
        }
      >
        취소하기
      </Button>
      <Button disabled size="sm">
        {buttonText}
      </Button>
    </>
  ) : (
    <>
      <OutstandingDropDown type="ADD" />
      <OutstandingDropDown type="DEL" />
    </>
  );
};

export default StudentsHeaderButtons;
