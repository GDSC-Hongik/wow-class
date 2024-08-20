import AssignmentList from "./_components/AssignmentList";
import CheckAttendanceNumber from "./_components/CheckAttendanceNumber";
import Header from "./_components/Header";

const StudyPage = () => {
  return (
    <>
      <Header />
      <CheckAttendanceNumber />
      <AssignmentList />
    </>
  );
};

export default StudyPage;
