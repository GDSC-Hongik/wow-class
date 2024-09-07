import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";
import TextButton from "wowds-ui/TextButton";

const StudentListItem = ({
  name,
  studentId,
  discordUsername,
  nickname,
  githubLink,
}: StudyStudentApiResponseDto) => {
  return (
    <styled.tr>
      <Text as="td" className={tableThStyle}>
        {name}
      </Text>
      <Text as="td" className={tableThStyle}>
        {studentId}
      </Text>
      <Text as="td" className={tableThStyle}>
        {discordUsername}
      </Text>
      <Text as="td" className={tableThStyle}>
        {nickname}
      </Text>
      <Text as="td" className={tableThStyle}>
        <TextButton
          asProp={Link}
          href={githubLink || ""}
          style={textButtonStyle}
          text={githubLink}
        />
      </Text>
    </styled.tr>
  );
};

const tableThStyle = css({
  padding: "1rem",
});

const textButtonStyle: CSSProperties = {
  width: "fit-content",
  padding: 0,
};

export default StudentListItem;
