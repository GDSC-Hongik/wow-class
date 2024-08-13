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

const Text = ({
  typo = "body1",
  color = "textBlack",
  children,
  className,
  ...rest
}: TextProps) => {
  return (
    <styled.p
      className={
        (css({
          textStyle: typo,
          color: color,
        }),
        className)
      }
      {...rest}
    >
      {children}
    </styled.p>
  );
};

export default Text;
