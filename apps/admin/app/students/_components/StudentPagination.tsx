import type { PaginatedStudyStudentResponseDto } from "types/dtos/studyStudent";
import Pagination from "wowds-ui/Pagination";

const StudentPagination = ({
  pageInfo,
  handleClickChangePage,
}: {
  pageInfo: Omit<PaginatedStudyStudentResponseDto, "content"> | null;
  handleClickChangePage: (nextPage: number) => void;
}) => {
  if (!pageInfo || !pageInfo.numberOfElements) return null;
  return (
    <Pagination
      totalPages={pageInfo.totalPages}
      onChange={handleClickChangePage}
    />
  );
};

export default StudentPagination;
