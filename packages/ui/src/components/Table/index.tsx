import { Flex } from "@styled-system/jsx";
import type { PropsWithChildren, ReactNode } from "react";

import Text from "../Text";

interface TableContentProps {
  text: string;
  subText?: string;
  rightContent?: ReactNode;
}

/**
 * @description Table 컴포넌트. 기본적으로 space-between로 정렬되어 있습니다.
 * @param {ReactNode} children - Table 내의 요소
 */
const Table = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      alignItems="center"
      height="80px"
      justifyContent="space-between"
      marginBottom="12px"
    >
      {children}
    </Flex>
  );
};

/**
 * @description Table.Left 컴포넌트. 왼쪽에 들어갈 컨텐츠를 정렬합니다.
 * @param {ReactNode} children - 왼쪽에 들어갈 컨텐츠
 */
Table.Left = ({ children }: PropsWithChildren) => {
  return (
    <Flex alignItems="center" justifyContent="flex-start">
      {children}
    </Flex>
  );
};

/**
 * @description Table.Right 컴포넌트. 오른쪽에 들어갈 컨텐츠를 정렬합니다.
 * @param {ReactNode} children - 오른쪽에 들어갈 컨텐츠
 */
Table.Right = ({ children }: PropsWithChildren) => {
  return (
    <Flex alignItems="center" justifyContent="flex-end">
      {children}
    </Flex>
  );
};

/**
 * @description Table.Content 컴포넌트
 * @param {string} text - 텍스트
 * @param {string} subText - 서브 텍스트
 * @param {ReactNode} rightContent - 텍스트 영역의 오른쪽 컨텐츠
 */
Table.Content = ({ text, subText, rightContent }: TableContentProps) => {
  return (
    <Flex direction="column" gap="xxs" justifyContent="center">
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
