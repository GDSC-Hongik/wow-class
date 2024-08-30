import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import Image from "next/image";

const EmptyCurriculumList = () => {
  return (
    <section aria-label="empty-curriculum-list" style={{ width: "100%" }}>
      <Text typo="h2">스터디 커리큘럼</Text>
      <Space height={24} />
      <Flex direction="column" width="100%">
        <Flex alignItems="center" direction="column" gap="xs">
          <Image
            alt="empty-curriculum"
            height={50}
            src="/images/empty.svg"
            width={150}
          />
          <Text color="sub" typo="body1">
            생성된 스터디 커리큘럼이 없어요.
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default EmptyCurriculumList;
