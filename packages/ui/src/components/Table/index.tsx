import { Flex } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";

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

export default Table;
