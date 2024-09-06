import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Link from "next/link";
import type { StudyStudentResponseDto } from "types/dtos/studyStudent";
import TextButton from "wowds-ui/TextButton";

const StudentListItem = ({
  name,
  studentId,
  discordUsername,
  nickname,
  githubLink,
}: StudyStudentResponseDto) => {
  return (
    <styled.tr>
      <Text as="td" className={tableThStyle} typo="body1">
        {name}
      </Text>
      <Text as="td" className={tableThStyle} typo="body1">
        {studentId}
      </Text>
      <Text as="td" className={tableThStyle} typo="body1">
        {discordUsername}
      </Text>
      <Text as="td" className={tableThStyle} typo="body1">
        {nickname}
      </Text>
      <Text as="td" className={tableThStyle} typo="body1">
        <TextButton
          asProp={Link}
          href={githubLink || ""}
          style={{ width: "fit-content", padding: 0 }}
          text={githubLink}
        />
      </Text>
    </styled.tr>
  );
};

const tableThStyle = css({
  padding: "1rem",
});

export default StudentListItem;
