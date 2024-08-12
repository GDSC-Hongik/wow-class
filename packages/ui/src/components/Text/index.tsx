import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ColorToken } from "@styled-system/tokens";
import type { CSSProperties, PropsWithChildren } from "react";
import type { typography as typoType } from "wowds-tokens";

type ColorKey = ColorToken;
type TypoKey = keyof typeof typoType;

interface TextProps extends PropsWithChildren {
  typo?: TypoKey;
  color?: ColorKey;
  style?: CSSProperties;
  className?: string;
}

export const Text = ({
  typo = "body0",
  color = "blue.100",
  children,
  ...rest
}: TextProps) => {
  return (
    <styled.p
      className={css({
        textStyle: typo,
        color: color,
      })}
      {...rest}
    >
      {children}
    </styled.p>
  );
};
