import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const CheckAttendancePage = () => {
  return redirect(routePath["my-study"]);
};

export default CheckAttendancePage;
