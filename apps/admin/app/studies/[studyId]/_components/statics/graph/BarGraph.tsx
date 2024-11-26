import { css } from "@styled-system/css";

const BarGraph = ({ totalStudentCount }: { totalStudentCount: number }) => {
  return <div className={BarGraphBackgroundStyle}></div>;
};

const BarGraphBackgroundStyle = css({
  width: "232px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "4px",
  flex: 2,
});
