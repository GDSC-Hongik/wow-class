"use client";

import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";

import AttendanceCheckForm from "./_components/AttendanceCheckForm";
import StudyInfo from "./_components/StudyInfo";

const MobileAttendanceCheckInputPage = () => {
  const [attended, setAttended] = useState(false);

  return attended ? (
    <Flex
      alignItems="center"
      direction="column"
      height="calc(100% - 40px)"
      justifyContent="center"
    >
      <Image
        alt="attendance-success"
        height={80}
        src="/images/success.svg"
        width={80}
      />
      <Space height={40} />
      <Text typo="h1">출석이 완료되었어요</Text>
      <Space height={12} />
      <Suspense fallback={null}>
        <StudyInfo />
      </Suspense>
      <Button asProp={Link} href="/my-study" style={buttonStyle}>
        메인 화면으로 돌아가기
      </Button>
    </Flex>
  ) : (
    <Flex alignItems="flex-start" direction="column">
      <Text as="h1" typo="h1">
        출석 체크
      </Text>
      <Space height={20} />
      <Text>
        스터디 시작 후 멘토의 안내에 따라 <br />
        출결번호를 입력해주세요.
      </Text>
      <Space height={20} />
      <Suspense fallback={null}>
        <AttendanceCheckForm
          onAttendanceSuccess={() => {
            setAttended(true);
          }}
        />
      </Suspense>
    </Flex>
  );
};

export default MobileAttendanceCheckInputPage;

const buttonStyle: React.CSSProperties = {
  bottom: "20px",
  position: "absolute",
  width: "calc(100% - 32px)",
  color: color.white,
};
