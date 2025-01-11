"use client";

import { Space, Text } from "@wow-class/ui";
import { Suspense } from "react";

import { AttendanceCheckBox } from "./_components/AttendanceCheckBox";

const MobileAttendanceCheckInfoPage = () => {
  return (
    <>
      <Text as="h1" typo="h1">
        출석 체크
      </Text>
      <Space height={40} />
      <Suspense fallback={null}>
        <AttendanceCheckBox />
      </Suspense>
    </>
  );
};

export default MobileAttendanceCheckInfoPage;
