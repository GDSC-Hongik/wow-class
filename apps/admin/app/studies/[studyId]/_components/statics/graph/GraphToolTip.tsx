import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
const GraphToolTip = ({ studentCount }: { studentCount: number }) => {
  return (
    <div className={ToolTipContainerStyle}>
      <div className={ToolTipStyle}>
        <Text color="black" typo="label2">
          {studentCount}명
        </Text>
      </div>
      <div className={ToolTipDecoStyle}></div>
    </div>
  );
};

export default GraphToolTip;

const ToolTipContainerStyle = css({
  position: "absolute",
  width: "43px",
  height: "38px",
  top: "-50%",
  transform: "translate(50%, -50%)",
  right: "-8px",
  zIndex: 20,
});

const ToolTipStyle = css({
  position: "relative",
  width: "100%",
  height: "24px",
  backgroundColor: "#C5C5C5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 20,
});

const ToolTipDecoStyle = css({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 15,
  width: "14px",
  height: "28px",
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  backgroundColor: "#C5C5C5",
});
