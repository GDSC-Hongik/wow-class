"use client";

import { Text } from "@wow-class/ui";
import {
  outstandingRoundMap,
  outstandingTypeMap,
} from "constants/status/outstandigOptions";
import { useAtomValue } from "jotai";

import {
  enabledOutstandingStudentsAtom,
  outstandingStudentsAtom,
} from "@/students/_contexts/StudyProvider";

const OutstandingModalHeader = () => {
  const { enabled } = useAtomValue(enabledOutstandingStudentsAtom);
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);

  if (!type || !achievement) return null;
  return enabled ? (
    <Text
      typo="h1"
      style={{
        textAlign: "center",
      }}
    >
      선택한 수강생을 <br />
      {outstandingRoundMap[achievement]} {outstandingTypeMap[type]}
      하시겠어요?
    </Text>
  ) : (
    <Text typo="h1">
      {outstandingRoundMap[achievement]} {outstandingTypeMap[type]}
      되었어요.
    </Text>
  );
};
export default OutstandingModalHeader;
