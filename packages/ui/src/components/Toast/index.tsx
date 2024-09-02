"use client";

import { css } from "@styled-system/css";
import type { FlexProps } from "@styled-system/jsx";
import { Flex } from "@styled-system/jsx";
import type { CSSProperties } from "react";
import { forwardRef } from "react";

import Text from "../Text";

/**
 * @description 토스트 컴포넌트입니다.
 *
 * @param {string} id - 토스트 컴포넌트의 id.
 * @param {"error" | "success"} type - 토스트 컴포넌트의 타입.
 * @param {string} text - 토스트 컴포넌트의 메인 텍스트.
 * @param {string} [subText] - 토스트 컴포넌트의 보조 텍스트.
 * @param {CSSProperties} [style] - 커스텀 스타일을 적용하기 위한 객체.
 * @param {string} [className] - 커스텀 클래스를 적용하기 위한 문자열.
 */

export interface ToastProps extends FlexProps {
  id: string;
  type: "error" | "success";
  text: string;
  subText?: string;
  style?: CSSProperties;
  className?: string;
}

export const Toast = forwardRef(
  ({ text, subText, type, ...rest }: ToastProps) => {
    return (
      <Flex
        className={toastContainerStyle}
        direction="column"
        justifyContent="center"
        {...rest}
      >
        <Text color="textWhite" typo="body1">
          {text}
        </Text>
        <Text color="outline" typo="body2">
          {subText}
        </Text>
      </Flex>
    );
  }
);

const toastContainerStyle = css({
  width: "22.375rem",
  padding: "0.75rem 1rem",

  borderRadius: "md",

  zIndex: 9999,

  background: "backgroundDimmer",
  backdropFilter: "blur(30px)",
  boxShadow: "mono",
});
