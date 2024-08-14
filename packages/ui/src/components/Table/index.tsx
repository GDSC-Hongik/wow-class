import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";

import Text from "../Text";

interface TableProps {
  left?: ReactNode;
  right?: ReactNode;
  center?: ReactNode;
}

interface TableContentProps {
  text: string;
  subText?: string;
  textRight?: ReactNode;
}

/**
 * @description Table 컴포넌트
 * @param {ReactNode} left - 왼쪽 컨텐츠
 * @param {ReactNode} right - 오른쪽 컨텐츠
 * @param {ReactNode} center - 중앙 컨텐츠
 */
const Table = ({ left, right, center }: TableProps) => {
  return (
    <Flex
      alignItems="center"
      height="80px"
      justifyContent="space-between"
      marginBottom="12px"
    >
      {center}
      <Flex alignItems="center" justifyContent="flex-start">
        {left}
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end">
        {right}
      </Flex>
    </Flex>
  );
};

/**
 * @description Table.Content 컴포넌트
 * @param {string} text - 텍스트
 * @param {string} subText - 서브 텍스트
 * @param {ReactNode} textRight - 오른쪽 컨텐츠
 */
Table.Content = function ({ text, subText, textRight }: TableContentProps) {
  return (
    <Flex direction="column" gap="xxs" justifyContent="center">
      <Flex gap="xs">
        {text && <Text typo="h3">{text}</Text>}
        {textRight}
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
