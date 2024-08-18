"use client";

import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { parseISODate, splitTime } from "@wow-class/utils";
import { studyApplyApi } from "apis/studyApplyApi";
import { dayToKorean } from "constants/dayToKorean";
import type { ComponentProps } from "react";
import type { StudyListApiResponseDto } from "types/dtos/apply-study";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

interface StudyItemProps {
  study: StudyListApiResponseDto;
}

const StudyItem = ({ study }: StudyItemProps) => {
  //NOTE: 모달이 열리도록 수정 예정
  const handleApplyButtonClick = async () => {
    const result = await studyApplyApi.applyStudy(study.studyId);

    if (!result.success) {
      console.error("스터디 신청 실패");
    } else {
      console.log("스터디 신청 성공");
    }
  };

  //NOTE: 임시로 신청 취소 버튼 만듬 (추후에 응답에 신청 여부에 따라 하나의 버튼에서 이루어질 수 있도록 수정)
  const handleCancelButtonClick = async () => {
    const result = await studyApplyApi.cancelStudyApplication(study.studyId);

    if (!result.success) {
      console.error("스터디 신청 실패");
    } else {
      console.log("스터디 취소 성공");
    }
  };

  const startTime = splitTime(study.startTime);
  const openingDate = parseISODate(study.openingDate);
  const studyTime = `${dayToKorean[study.dayOfWeek.toUpperCase()]} ${startTime.hours}:${startTime.minutes} - ${
    Number(startTime.hours) + 1
  }:${startTime.minutes}`;

  return (
    <Table>
      <Table.Content
        subText={`${study.introduction} - ${study.notionLink}`}
        text={study.title}
        rightContent={
          <Tag
            color={sessionColors[study.studyType] ?? "green"}
            variant="solid1"
          >
            {study.studyType}
          </Tag>
        }
      />
      <Text className={textCellStyle}>{study.mentorName}</Text>
      <Text className={textCellStyle}>{studyTime}</Text>
      <Text className={textCellStyle}>{study.totalWeek}주 코스</Text>
      <Text className={textCellStyle}>
        {`${openingDate.month}.${openingDate.day} 개강`}
      </Text>
      <styled.div paddingX="24px">
        <Button size="sm" variant="solid" onClick={handleApplyButtonClick}>
          수강 신청
        </Button>
        <Button size="sm" variant="solid" onClick={handleCancelButtonClick}>
          신청 취소
        </Button>
      </styled.div>
    </Table>
  );
};

const textCellStyle = css({
  paddingX: "28px",
});

const sessionColors: Record<string, ComponentProps<typeof Tag>["color"]> = {
  "과제 스터디": "green",
  "온라인 세션": "blue",
  "오프라인 세션": "yellow",
};

export default StudyItem;
