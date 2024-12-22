import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const StudentStatusPage = () => {
  return redirect(routerPath.students.href);
};

export default StudentStatusPage;
