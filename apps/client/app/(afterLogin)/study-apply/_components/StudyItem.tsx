"use client";

import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { parseDate, splitTime } from "@wow-class/utils";
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
  const handleApplyButtonClick = () => {
    studyApplyApi
      .applyStudy(study.studyId)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error("스터디 신청 실패:", error.errorMessage || error);
      });
  };

  //NOTE: 임시로 신청 취소 버튼 만듬 (추후에 응답에 신청 여부에 따라 하나의 버튼에서 이루어질 수 있도록 수정)
  const handleCancelButtonClick = () => {
    studyApplyApi
      .cancelStudyApplication(study.studyId)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error("스터디 취소 실패:", error.errorMessage || error);
      });
  };

  return (
    <Table>
      <Table.Content
        subText={`${study.introduction}-${study.notionLink}`}
        text={study.title}
        rightContent={
          <Tag
            variant="solid1"
            color={
              sessionColors[study.studyType] as ComponentProps<
                typeof Tag
              >["color"]
            }
          >
            {study.studyType}
          </Tag>
        }
      />
      <Text className={textCellStyle}>{study.mentorName}</Text>
      <Text
        className={textCellStyle}
      >{`${dayToKorean[study.dayOfWeek.toLocaleUpperCase()]} ${splitTime(study.startTime).hours}:${splitTime(study.startTime).minutes}-${Number(splitTime(study.startTime).hours) + 1}:${splitTime(study.startTime).minutes}`}</Text>
      <Text className={textCellStyle}>{study.totalWeek}주 코스</Text>
      <Text
        className={textCellStyle}
      >{`${parseDate(study.openingDate).month}.${parseDate(study.openingDate).day} 개강`}</Text>
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
