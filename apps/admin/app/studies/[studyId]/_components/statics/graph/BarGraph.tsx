import { css } from "@styled-system/css";

const BarGraph = ({ totalStudentCount }: { totalStudentCount: number }) => {
  return (
    <div className={BarGraphBackgroundStyle}>
      <div
        className={BarGraphStyle}
        style={{ width: `${totalStudentCount}px` }}
      ></div>
    </div>
  );
};

export default BarGraph;

const BarGraphBackgroundStyle = css({
  width: "232px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "4px",
  flex: 2,
  backgroundColor: "monoBackgroundPressed",
});

const BarGraphStyle = css({
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "primary",
  height: "24px",
});
