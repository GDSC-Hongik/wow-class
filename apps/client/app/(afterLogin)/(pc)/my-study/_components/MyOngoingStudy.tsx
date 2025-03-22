import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyKoreanMap } from "constants/studyKoreanMap";
import Link from "next/link";
import type { MyOngoingStudyInfoDtoV2 } from "types/dtos/myStudy";
import Box from "wowds-ui/Box";

interface MyOngoingStudyProps {
  myOngoingStudyData: MyOngoingStudyInfoDtoV2;
}

const MyOngoingStudy = async ({ myOngoingStudyData }: MyOngoingStudyProps) => {
  return (
    <section aria-label="my-ongoing-study">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">수강 중인 스터디</Text>
        {myOngoingStudyData?.length ? (
          <Flex flexWrap="nowrap" gap={20} overflowX="auto">
            {myOngoingStudyData.map(
              ({ studyId, mentorName, studyName, semester, studyType }) => (
                <Link href={`my-study/${studyId}`} key={studyId}>
                  <Box
                    key={studyId}
                    style={{ width: 376, flexShrink: 0 }}
                    subText={`${semester.academicYear}-${semester.semesterType === "FIRST" ? 1 : 2} · ${mentorName} 멘토 · ${studyKoreanMap[studyType]} 스터디`}
                    text={studyName}
                    variant="arrow"
                  />
                </Link>
              )
            )}
          </Flex>
        ) : (
          <Flex alignItems="center" direction="column" gap={24} paddingY={38}>
            <Text as="h2" color="sub" typo="h2">
              수강 중인 스터디가 없어요.
            </Text>
          </Flex>
        )}
      </Flex>
    </section>
  );
};

export default MyOngoingStudy;
