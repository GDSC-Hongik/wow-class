import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import { attendanceStatusMap } from "constants/attendanceStatusMap";
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
  const mentorName = basicStudyInfoResponse?.mentorName;
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

  const attendanceButtonText =
    attendanceStatus === "ATTENDED" ? "출석 체크 완료" : "출석 체크하기";
  return (
    <Box
      style={dailyTaskBoxStyle}
      text={
        <Flex direction="column" gap="18px">
          <Flex className={dailyTaskBoxContentContainerStyle} gap="18px">
            <Text
              as="span"
              className={attendanceTextStyle}
              color="primary"
              typo="body2"
            >
              출석
            </Text>
            <Flex direction="column" gap="16px">
              <Flex direction="column" gap="4px">
                <Flex alignItems="center" gap="8px">
                  <Text as="h2" typo="body0">
                    {week}주차 출석체크
                  </Text>
                  <Tag
                    className={tagStyle}
                    color={attendanceStatusColor}
                    variant="solid2"
                  >
                    {attendanceStatusLabel}
                  </Tag>
                </Flex>
                <Text as="div" color="error" typo="body2">
                  {attendancePeriod}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Button
            asProp={Link}
            disabled={attendanceStatus !== "BEFORE_ATTENDANCE"}
            href={`/mobile/attendance-check-info?study-detail-id=${studyDetailId}&week=${week}&study-name=${studyName}&deadline=${deadLine}&mentor=${mentorName}&isAttendanceCheck=${attendanceStatus === "BEFORE_ATTENDANCE"}`}
            size="lg"
            style={attendanceButtonStyle}
          >
            {attendanceButtonText}
          </Button>
        </Flex>
      }
    />
  );
};

export default AttendanceStatusBox;

const dailyTaskBoxStyle = {
  paddingBottom: "24px",
  gap: "0px",
};

const dailyTaskBoxContentContainerStyle = css({});

const attendanceButtonStyle = {};

const attendanceTextStyle = css({
  paddingTop: "3.5px",
});

const tagStyle = css({
  height: "20px",
});
