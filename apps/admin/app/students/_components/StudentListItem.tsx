import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

const StudentListItem = () => {
  return (
    <styled.tr>
      <Text as="td" className={tableThStyle} typo="body2">
        이름
      </Text>
      <Text as="td" className={tableThStyle} typo="body2">
        학번
      </Text>
      <Text as="td" className={tableThStyle} typo="body2">
        디스코드 사용자명
      </Text>
      <Text as="td" className={tableThStyle} typo="body2">
        깃허브 링크
      </Text>
    </styled.tr>
  );
};

const tableThStyle = css({
  padding: "1rem",
});

export default StudentListItem;
