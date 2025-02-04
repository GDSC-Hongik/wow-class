import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Image from "next/image";

const EmptyStudyApplication = () => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      gap="xl"
      justifyContent="center"
      minHeight="calc(100vh - 108px)"
    >
      <Image
        alt="empty-study"
        height={140}
        src="/images/empty.svg"
        width={186}
      />
      <Text as="h2" color="sub" typo="h2">
        현재 수강할 수 있는 스터디가 없어요
      </Text>
    </Flex>
  );
};

export default EmptyStudyApplication;
