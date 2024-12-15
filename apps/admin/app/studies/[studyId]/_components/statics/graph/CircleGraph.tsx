import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import React from "react";
import { color } from "wowds-tokens";

const CircleGraph = ({
  size = 192,
  percentage = 0,
  total = 100,
}: {
  size?: number;
  percentage?: number;
  total?: number;
}) => {
  const radius = 50; // 반지름
  const strokeWidth = 30; // 선 굵기
  const circumference = 2 * Math.PI * radius; // 둘레
  const progress = (percentage / total) * circumference; // 진행 값

  return (
    <Flex alignItems="center" direction="column" gap="sm" minWidth="288px">
      <svg
        className={css({ transform: "rotate(-90deg)" })}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={radius}
          stroke={color.darkDisabled}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={radius}
          stroke="#34A853"
          strokeDasharray={`${progress} ${circumference}`}
          strokeDashoffset="0"
          strokeWidth={strokeWidth}
        />
        <text
          dominantBaseline="middle"
          fill="#000"
          fontSize="20px"
          fontWeight="bold"
          textAnchor="middle"
          x={size / 2}
          y={size / 2}
        >
          {percentage}%
        </text>
      </svg>

      <Flex alignItems="center" gap="sm" justifyContent="center">
        <Flex alignItems="center" gap="xs" justifyContent="center">
          <span
            className={css({
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#34A853",
            })}
          ></span>
          <Text typo="label2">수료 가능</Text>
        </Flex>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "4px",
          })}
        >
          <span
            className={css({
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "darkDisabled",
            })}
          ></span>
          <Text typo="label2">수료 불가능</Text>
        </div>
      </Flex>
    </Flex>
  );
};

export default CircleGraph;
