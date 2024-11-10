import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const OutstandingPage = () => {
  return redirect(routerPath.students.href);
};

export default OutstandingPage;
