import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import { attendanceStatusMap } from "constants/attendanceStatusMap";
import { routePath } from "constants/routePath";
import Link from "next/link";
import type { AttendanceStatusType } from "types/entities/myStudy";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

interface AttendanceStatusBoxProps {
  week: number;
  studyDetailId: number;
  attendanceStatus: AttendanceStatusType;
  deadLine: string;
}

const AttendanceStatusBox = async ({
  week,
  attendanceStatus,
  studyDetailId,
  deadLine,
}: AttendanceStatusBoxProps) => {
  const myOngoingStudyInfoResponse = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoResponse?.studyId) {
    return null;
  }

  const basicStudyInfoResponse = await myStudyApi.getBasicStudyInfo(
    myOngoingStudyInfoResponse?.studyId
  );
  const studyName = basicStudyInfoResponse?.title;

  const {
    year: startYear,
    month: startMonth,
    day: startDay,
    hours: endHours,
    minutes: endMinutes,
  } = parseISODate(deadLine);

  const attendancePeriod = `${startYear}년 ${startMonth}월 ${startDay}일 00:00 - ${padWithZero(endHours)}:${padWithZero(endMinutes)}까지`;
  const { label: attendanceStatusLabel, color: attendanceStatusColor } =
    attendanceStatusMap[attendanceStatus];

  return (
    <Box
      style={dailyTaskBoxStyle}
      text={
        <Flex
          className={dailyTaskBoxContentContainerStyle}
          direction="column"
          justifyContent="space-between"
        >
          <Flex direction="column" gap="16px">
            <Text as="div" color="primary" typo="label2">
              출석
            </Text>
            <Flex direction="column" gap="4px">
              <Flex gap="8px">
                <Text as="h2" typo="h2">
                  {week}주차 출석체크
                </Text>
                <Tag color={attendanceStatusColor} variant="solid2">
                  {attendanceStatusLabel}
                </Tag>
              </Flex>
              <Text as="div" color="error" typo="body1">
                {attendancePeriod}
              </Text>
            </Flex>
          </Flex>
          <Button
            asProp={Link}
            disabled={attendanceStatus === "ATTENDED"}
            href={`${routePath["attendance-check"]}?study-detail-id=${studyDetailId}&week=${week}&study-name=${studyName}&deadline=${deadLine}`}
            size="lg"
            style={attendanceButtonStyle}
          >
            출석 체크하기
          </Button>
        </Flex>
      }
    />
  );
};

export default AttendanceStatusBox;

const dailyTaskBoxStyle = {
  maxWidth: "376px",
  minWidth: "376px",
  paddingBottom: "20px",
  height: "229px",
};

const dailyTaskBoxContentContainerStyle = css({
  height: "185px",
  minWidth: "328px !important",
});

const attendanceButtonStyle = {
  minWidth: "328px",
};
