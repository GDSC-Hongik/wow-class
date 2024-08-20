import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { studyInfoApi } from "apis/study/studyInfoApi";
const AssignmentList = async () => {
  const assignmentList = await studyInfoApi.getAssignmentList(2);
  return (
    <section>
      <Text>주차별 과제</Text>
      {assignmentList?.map(
        (
          {
            studyDetailId,
            title,
            deadline,
            week,
            descriptionLink,
            assignmentStatus,
          },
          index
        ) => {
          return (
            <Table key={`${studyDetailId}-${index}`}>
              <Table.Left>
                <Flex alignItems="center" gap="47px">
                  <Text typo="body1">{week}주차</Text>
                  <Flex direction="column">
                    <Text typo="h3">{title}</Text>
                    <Text color="sub" typo="body2">
                      {deadline}
                    </Text>
                  </Flex>
                </Flex>
              </Table.Left>
              <Table.Right></Table.Right>
            </Table>
          );
        }
      )}
    </section>
  );
};

export default AssignmentList;
