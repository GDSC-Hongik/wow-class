import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

const Header = async ({ studyId }: { studyId: number }) => {
  const basicStudyInfoData = await myStudyApi.getBasicStudyInfo(studyId);
  return (
    <section>
      <Flex direction="column" gap="5px">
        <Text as="div" color="primary" typo="body2">
          수강 중인 스터디
        </Text>
        <Text as="h1" typo="h1">
          {basicStudyInfoData?.title}
        </Text>
      </Flex>
    </section>
  );
};

export default Header;
