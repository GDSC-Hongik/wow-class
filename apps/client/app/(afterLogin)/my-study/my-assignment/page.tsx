import { Flex, styled } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import Image from "next/image";

import { AssignmentHistory } from "@/(afterLogin)/my-study/my-assignment/_components";

import { AssignmentContent } from "./_components/AssignmentContent";
import { AssignmentDescription } from "./_components/AssignmentDescription";

const MyAssignmentPage = () => {
  return (
    <>
      <header>
        <Flex gap="sm" textStyle="h1">
          <styled.h1 color="textBlack">나의 과제</styled.h1>
          <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
          <styled.h1 color="primary">기초 웹 스터디</styled.h1>
        </Flex>
      </header>
      <Space height={8} />
      <AssignmentDescription />
      <Space height={48} />
      <section>
        <AssignmentContent />
      </section>
      <Space height={64} />
      <section>
        <AssignmentHistory />
      </section>
    </>
  );
};

export default MyAssignmentPage;
