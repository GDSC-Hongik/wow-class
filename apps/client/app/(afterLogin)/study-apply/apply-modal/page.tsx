import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const ApplyModalPage = () => {
  return redirect(routePath["study-apply"]);
};

export default ApplyModalPage;
