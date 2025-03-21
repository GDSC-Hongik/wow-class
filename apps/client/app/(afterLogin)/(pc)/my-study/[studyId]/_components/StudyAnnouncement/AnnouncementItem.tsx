import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Link from "next/link";
import type { StudyAnnouncementDto } from "types/dtos/myStudy";

const AnnouncementItem = ({
  title,
  link,
  createdDate,
}: StudyAnnouncementDto) => {
  const displayDate = `${createdDate.slice(0, 4)}.${createdDate.slice(5, 7)}.${createdDate.slice(8, 10)}`;
  return (
    <Flex justifyContent="space-between" padding="1.75rem 0">
      <Link href={link}>
        <Text typo="h3">{title}</Text>
      </Link>
      <Text typo="body1">{displayDate}</Text>
    </Flex>
  );
};

export default AnnouncementItem;
