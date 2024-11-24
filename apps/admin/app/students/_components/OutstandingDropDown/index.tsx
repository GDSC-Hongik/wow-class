"use client";

import { styled } from "@styled-system/jsx";
import type { OutstandingType } from "constants/status/outstandigOptions";
import {
  OUTSTANDING_ADD_OPTIONS,
  OUTSTANDING_DEL_OPTIONS,
} from "constants/status/outstandigOptions";
import { useSetAtom } from "jotai";
import type { AchievementType } from "types/entities/achievement";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import {
  enabledOutstandingStudentsAtom,
  outstandingStudentsAtom,
} from "@/students/_contexts/StudyProvider";

import DropDownTrigger from "./DropDownTrigger";

const OutstandingDropDown = ({ type }: { type: OutstandingType }) => {
  const setOutstandingStudents = useSetAtom(outstandingStudentsAtom);
  const setEnabled = useSetAtom(enabledOutstandingStudentsAtom);

  const findOptions = () => {
    if (type === "처리") return OUTSTANDING_ADD_OPTIONS;
    if (type === "철회") return OUTSTANDING_DEL_OPTIONS;
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
      onChange={(value: {
        selectedValue: string;
        selectedText: React.ReactNode;
      }) => {
        setOutstandingStudents({
          type,
          achievement: value.selectedValue as AchievementType,
        });
        setEnabled({ enabled: true });
      }}
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
