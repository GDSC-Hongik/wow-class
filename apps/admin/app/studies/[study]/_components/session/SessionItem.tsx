import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { ComponentProps } from "react";
import type { SessionApiResponseDto } from "types/dtos/sessionList";
import type { DifficultyType } from "types/entities/difficulty";
import checkThisWeek from "utils/checkThisWeek";
import Tag from "wowds-ui/Tag";

const SessionItem = ({ session }: { session: SessionApiResponseDto }) => {
  const { description = "", period, week, title, difficulty } = session;
  console.log(session);
  const { startDate, endDate } = period;
  const { month: startMonth, day: startDay } = parseISODate(startDate);
  const { month: endMonth, day: endDay } = parseISODate(endDate);
  const thisWeekAssignment = checkThisWeek(endDate);
  return (
    <Table>
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
              <Text typo="h3">{title || "-"}</Text>
              {difficulty && (
                <Tag color={DifficultyMap[difficulty].color} variant="outline">
                  {DifficultyMap[difficulty].text}
                </Tag>
              )}
            </Flex>
            <Text color="sub" typo="body2">
              {description || "스터디 상세 설명을 작성해주세요."}
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
};

export default SessionItem;

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
  // eslint-disable-next-line no-undef
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
