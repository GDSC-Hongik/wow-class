"use client";
import { css, cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
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
  const toggleTooltip = () => {
    if (isToolTipActive) setShowTooltip((prevState) => !prevState);
  };
  return (
    <Flex
      alignItems="center"
      flexShrink="0"
      gap="sm"
      justifyContent="flex-start"
    >
      <div
        className={BarGraphBackgroundStyle({
          type: isCurriculumCanceled ? "canceled" : "default",
        })}
      >
        {percent > 0 ? (
          <div
            style={{ width: `${50 + (232 - 50) * (percent / 100)}px` }}
            className={barGraphStyle({
              type: barColor,
            })}
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            <div className={barGraphInnerStyle}>
              <Text className={percentLabelStyle} color="white" typo="label2">
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
          <Text className={zeroPercentLabelStyle} color="sub" typo="label2">
            0%
          </Text>
        )}
      </div>
      {isCurriculumCanceled && (
        <Text as="div" color="sub" typo="label2">
          휴강
        </Text>
      )}
    </Flex>
  );
};

export default BarGraph;

const BarGraphBackgroundStyle = cva({
  base: {
    position: "relative",
    minWidth: "232px",
    width: "232px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flex: 2,
    zIndex: "5",
    borderRadius: "4px",
  },
  variants: {
    type: {
      default: {
        backgroundColor: "monoBackgroundPressed",
      },
      canceled: {
        backgroundColor: "lightDisabled",
      },
    },
  },
});

const barGraphStyle = cva({
  base: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    height: "32px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
  },
  variants: {
    type: {
      default: {
        backgroundColor: "primary",
      },
      average: {
        backgroundColor: "secondaryYellow",
      },
    },
  },
});

const percentLabelStyle = css({
  height: "100%",
  display: "flex",
  alignItems: "center",
});

const barGraphInnerStyle = css({
  position: "relative",
  width: "100%",
  height: "100%",
});

const zeroPercentLabelStyle = css({
  marginLeft: "8px",
});
