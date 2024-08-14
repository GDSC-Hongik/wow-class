const AssignmentLayout = ({ create, view }) => {
  // TODO: 스터디 과제 상세 조회
  const isRegistered = true;

  return <>{isRegistered ? view : create}</>;
};

export default AssignmentLayout;
