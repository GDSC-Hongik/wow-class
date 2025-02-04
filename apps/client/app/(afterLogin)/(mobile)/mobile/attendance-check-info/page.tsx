"use client";

import { Space, Text } from "@wow-class/ui";
import { Suspense } from "react";

import Spinner from "../_components/Spinner";
import { AttendanceCheckBox } from "./_components/AttendanceCheckBox";

const MobileAttendanceCheckInfoPage = () => {
  return (
    <>
      <Text as="h1" typo="h1">
        출석 체크
      </Text>
      <Space height={40} />
      <Suspense fallback={<Spinner />}>
        <AttendanceCheckBox />
      </Suspense>
    </>
  );
};

export default MobileAttendanceCheckInfoPage;
