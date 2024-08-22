import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const StudyApplicationPage = () => {
  return redirect(routePath["study-apply"]);
};

export default StudyApplicationPage;
