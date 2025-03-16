const StudyDetailPage = ({ params }: { params: { studyId: string } }) => {
  const { studyId } = params;
  return <div>{studyId} 스터디 상세 페이지</div>;
};

export default StudyDetailPage;
