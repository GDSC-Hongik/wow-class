"use client";
import { css, cva } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { useState } from "react";

import GraphToolTip from "./GraphToolTip";

const BarGraph = ({
  barColor = "default",
  totalStudent = 0,
  percent = 0,
  isCurriculumCanceled,
  isToolTipActive = true,
}: {
  barColor?: "default" | "average";
  totalStudent?: number;
  isToolTipActive?: boolean;
  percent?: number;
  isCurriculumCanceled?: boolean;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className={BarGraphBackgroundStyle({
        type: isCurriculumCanceled ? "canceled" : "default",
      })}
    >
      {isCurriculumCanceled ? (
        <Text className={CanceledClassLabel} color="mono.800" typo="label2">
          휴강 주차
        </Text>
      ) : (
        <>
          {percent > 0 ? (
            <div
              style={{ width: `${50 + (232 - 50) * (percent / 100)}px` }}
              className={BarGraphStyle({
                type: barColor,
              })}
              onMouseEnter={() => {
                if (isToolTipActive) setShowTooltip(true);
              }}
              onMouseLeave={() => {
                if (isToolTipActive) setShowTooltip(false);
              }}
            >
              <div className={BarGraphInnerStyle}>
                <Text color="white" typo="label2">
                  {percent > 0 && `${percent}%`}
                </Text>
                {showTooltip && (
                  <GraphToolTip
                    studentCount={Math.ceil((percent / 100) * totalStudent)}
                  />
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className={BarGraphZeroPercent}></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BarGraph;

const BarGraphBackgroundStyle = cva({
  base: {
    position: "relative",
    maxWidth: "232px",
    width: "232px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flex: 2,
    zIndex: "5",
  },
  variants: {
    type: {
      default: {
        backgroundColor: "monoBackgroundPressed",
      },
      canceled: {
        backgroundColor: "mono.400",
      },
    },
  },
});

const BarGraphStyle = cva({
  base: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    height: "24px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
  },
  variants: {
    type: {
      default: {
        backgroundColor: "primary",
      },
      average: {
        backgroundColor: "success",
      },
    },
  },
});

const BarGraphZeroPercent = css({
  width: "2px",
  height: "24px",
  backgroundColor: "primary",
});

const BarGraphInnerStyle = css({
  position: "relative",
  width: "100%",
  height: "100%",
});

const CanceledClassLabel = css({
  marginLeft: "8px",
});
