import { Flex, styled } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import Image from "next/image";

import { AssignmentHistory } from "@/(afterLogin)/my-study/my-assignment/_components";

import { AssignmentContent } from "./_components/AssignmentContent";
import { AssignmentDescription } from "./_components/AssignmentDescription";
import { AssignmentHeader } from "./_components/AssignmentHeader";

const MyAssignmentPage = () => {
  return (
    <>
      <AssignmentHeader />
      <Space height={8} />
      <AssignmentDescription />
      <Space height={48} />

      <AssignmentContent />
      <Space height={64} />
      <section>
        <AssignmentHistory />
      </section>
    </>
  );
};

export default MyAssignmentPage;
