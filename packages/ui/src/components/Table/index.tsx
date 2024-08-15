import { Flex } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import Text from "../Text";

interface TableProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

/**
 * @description Table 컴포넌트. 기본적으로 space-between로 정렬되어 있습니다.
 * @param {ReactNode} children - Table 내의 요소
 */
const Table = ({ children, ...rest }: TableProps) => {
  return (
    <Flex
      alignItems="center"
      height="80px"
      justifyContent="space-between"
      marginBottom="12px"
      width="100%"
      {...rest}
    >
      {children}
    </Flex>
  );
};

interface TableLeftProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

/**
 * @description Table.Left 컴포넌트. 왼쪽에 들어갈 컨텐츠를 정렬합니다.
 * @param {ReactNode} children - 왼쪽에 들어갈 컨텐츠
 */
Table.Left = ({ children, ...rest }: TableLeftProps) => {
  return (
    <Flex alignItems="center" justifyContent="flex-start" {...rest}>
      {children}
    </Flex>
  );
};

interface TableRightProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

/**
 * @description Table.Right 컴포넌트. 오른쪽에 들어갈 컨텐츠를 정렬합니다.
 * @param {ReactNode} children - 오른쪽에 들어갈 컨텐츠
 */
Table.Right = ({ children, ...rest }: TableRightProps) => {
  return (
    <Flex alignItems="center" justifyContent="flex-end" {...rest}>
      {children}
    </Flex>
  );
};

interface TableContentProps {
  text: string;
  subText?: string;
  rightContent?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * @description Table.Content 컴포넌트
 * @param {string} text - 텍스트
 * @param {string} subText - 서브 텍스트
 * @param {ReactNode} rightContent - 텍스트 영역의 오른쪽 컨텐츠
 */
Table.Content = ({
  text,
  subText,
  rightContent,
  ...rest
}: TableContentProps) => {
  return (
    <Flex direction="column" gap="xxs" justifyContent="center" {...rest}>
      <Flex gap="xs">
        {text && <Text typo="h3">{text}</Text>}
        {rightContent}
      </Flex>
      {subText && (
        <Text color="sub" typo="body2">
          {subText}
        </Text>
      )}
    </Flex>
  );
};

export default Table;
