import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { sessionList } from "constants/mockData";
import Image from "next/image";
import type { ComponentProps } from "react";
import type { DifficultyType } from "types/entities/difficulty";
import checkThisWeek from "utils/checkThisWeek";
import Tag from "wowds-ui/Tag";

const SessionList = async ({ studyId }: { studyId: string }) => {
  // const sessionList = await studyInfoApi.getSessionList(parseInt(studyId,10));

  if (!sessionList || sessionList.length === 0) {
    return (
      <section aria-label="session-list" style={{ width: "100%" }}>
        <Text typo="h2">스터디 커리큘럼</Text>
        <Space height={24} />
        <Flex direction="column" width="100%">
          <Flex alignItems="center" direction="column" gap="xs">
            <Image
              alt="empty-session"
              height={50}
              src="/images/empty.svg"
              width={150}
            />
            <Text color="sub" typo="body1">
              먼저 스터디 커리큘럼을 작성해주세요.
            </Text>
          </Flex>
        </Flex>
      </section>
    );
  } else {
    return (
      <section aria-label="session-list">
        <Text typo="h2">스터디 커리큘럼</Text>
        <Space height={24} />
        {sessionList?.map(
          ({ studyDetailId, period, week, title, difficulty }, index) => {
            const { startDate, endDate } = period;
            const { month: startMonth, day: startDay } =
              parseISODate(startDate);
            const { month: endMonth, day: endDay } = parseISODate(endDate);
            const thisWeekAssignment = checkThisWeek(endDate);
            return (
              <Table key={`${studyDetailId}-${index}`}>
                <Table.Left>
                  <Flex alignItems="center" gap="47px">
                    <Flex alignItems="center" gap="xxs">
                      <div
                        className={ThisWeekBarStyle({
                          type: thisWeekAssignment ? "thisWeek" : "notThisWeek",
                        })}
                      />
                      <Text typo="body1">{week}주차</Text>
                    </Flex>
                    <Flex direction="column" gap="xxs">
                      <Flex alignItems="center" gap="xs">
                        <Text typo="h3">{title}</Text>
                        <Tag
                          color={DifficultyMap[difficulty].color}
                          variant="outline"
                        >
                          {DifficultyMap[difficulty].text}
                        </Tag>
                      </Flex>
                      <Text color="sub" typo="body2">
                        블라블라 설명~
                      </Text>
                    </Flex>
                  </Flex>
                </Table.Left>
                <Table.Right>
                  <Text typo="body1">
                    {padWithZero(startMonth)}.{padWithZero(startDay)} -{" "}
                    {padWithZero(endMonth)}.{padWithZero(endDay)}
                  </Text>
                </Table.Right>
              </Table>
            );
          }
        )}
      </section>
    );
  }
};
export default SessionList;

const ThisWeekBarStyle = cva({
  base: {
    width: "4px",
    height: "18px",
  },
  variants: {
    type: {
      thisWeek: {
        backgroundColor: "primary",
      },
      notThisWeek: {
        backgroundColor: "transparent",
      },
    },
  },
});

const DifficultyMap: Record<
  DifficultyType,
  { text: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  HIGH: {
    text: "고급",
    color: "red",
  },
  MEDIUM: {
    text: "중급",
    color: "green",
  },
  LOW: {
    text: "기초",
    color: "blue",
  },
};
