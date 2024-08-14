import type { ReactNode } from "react";

const AssignmentLayout = ({
  create,
  view,
}: {
  create: ReactNode;
  view: ReactNode;
}) => {
  // TODO: 스터디 과제 상세 조회
  const isRegistered = true;

  return <>{isRegistered ? view : create}</>;
};

export default AssignmentLayout;
