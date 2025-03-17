import { Space } from "@wow-class/ui";
import Divider from "wowds-ui/Divider";

import Header from "./_components/Header";

const StudyDetailPage = ({ params }: { params: { studyId: number } }) => {
  const { studyId } = params;
  return (
    <>
      <Header studyId={studyId} />
      <Space height={40} />
      <Divider />
    </>
  );
};

export default StudyDetailPage;
