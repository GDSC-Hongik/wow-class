import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";

const StudyTimeLine = ({
  period,
}: {
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
}) => {
  const { startDate, endDate } = period;
  const { month: startMonth, day: startDay } = parseISODate(startDate);
  const { month: endMonth, day: endDay } = parseISODate(endDate);

  const studyTimeLine = `${padWithZero(startMonth)}.${padWithZero(startDay)} - ${padWithZero(endMonth)}.${padWithZero(endDay)}`;
  return (
    <div className={CurriculumTimelineStyle}>
      <Text color="sub" typo="body1">
        진행 기간
      </Text>
      <Text color="darkDisabled" typo="body1">
        {studyTimeLine}
      </Text>
    </div>
  );
};

export default StudyTimeLine;

const CurriculumTimelineStyle = css({
  flex: 3,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "xs",
  gap: "xs",
});
