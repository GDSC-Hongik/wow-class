import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const AttendanceCompletePage = () => {
  return redirect(routePath["my-study"]);
};

export default AttendanceCompletePage;
