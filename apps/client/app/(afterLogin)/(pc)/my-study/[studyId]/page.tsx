import Divider from "wowds-ui/Divider";

import Header from "./_components/Header";

const StudyDetailPage = ({ params }: { params: { studyId: number } }) => {
  const { studyId } = params;
  return (
    <>
      <Header studyId={studyId} />
      <Divider />
    </>
  );
};

export default StudyDetailPage;
