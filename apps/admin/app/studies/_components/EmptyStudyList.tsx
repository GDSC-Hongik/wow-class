import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Image from "next/image";

const EmptyStudyList = () => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      gap="xl"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Image
        alt="study-empty"
        height={186}
        src="/images/empty.svg"
        width={140}
      />
      <Text color="sub" typo="h2">
        개설된 스터디가 없어요
      </Text>
    </Flex>
  );
};

export default EmptyStudyList;
