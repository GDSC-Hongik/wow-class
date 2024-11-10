import { styled } from "@styled-system/jsx";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import DropDownTrigger from "./DropDownTrigger";

type AchievementType =
  | "FIRST_ROUND_OUTSTANDING_STUDENT"
  | "SECOND_ROUND_OUTSTANDING_STUDENT";

type OutstandingDropDownOption = {
  id: number;
  text: string;
  value: AchievementType;
};

const OUTSTANDING_ADD_OPTIONS: OutstandingDropDownOption[] = [
  { id: 1, text: "1차 우수 처리", value: "FIRST_ROUND_OUTSTANDING_STUDENT" },
  { id: 2, text: "2차 우수 처리", value: "SECOND_ROUND_OUTSTANDING_STUDENT" },
];
const OUTSTANDING_DEL_OPTIONS: OutstandingDropDownOption[] = [
  { id: 1, text: "1차 우수 철회", value: "FIRST_ROUND_OUTSTANDING_STUDENT" },
  { id: 2, text: "2차 우수 철회", value: "SECOND_ROUND_OUTSTANDING_STUDENT" },
];

const OutstandingDropDown = ({ type }: { type: "ADD" | "DEL" }) => {
  const findOptions = () => {
    if (type === "ADD") return OUTSTANDING_ADD_OPTIONS;
    if (type === "DEL") return OUTSTANDING_DEL_OPTIONS;
    return null;
  };

  const options = findOptions();

  return (
    <DropDown
      trigger={
        <styled.div>
          <DropDownTrigger type={type} />
        </styled.div>
      }
    >
      {options &&
        options.map((option) => (
          <DropDownOption
            key={option.id}
            style={{ cursor: "pointer" }}
            text={option.text}
            value={option.value}
          />
        ))}
    </DropDown>
  );
};

export default OutstandingDropDown;
